var editor = null;
var elmDocs = null;

var elmModuleToPageMap = {
  'Prelude': '/docs/Prelude.elm',
  'Maybe': '/docs/Data/Maybe.elm',
  'List': '/docs/Data/List.elm',
  'Dict': '/docs/Data/Dict.elm',
  'Either': '/docs/Data/Either.elm',
  'Set': '/docs/Data/Set.elm',
  'Char': '/docs/Data/Char.elm',
  'Javascript': '/docs/Foreign/Javascript.elm',
  'Experimental': '/docs/Foreign/Javascript/Experimental.elm',
  'JSON': '/docs/Foreign/Javascript/JSON.elm',
  'Input': '/docs/Signal/Input.elm',
  'Time': '/docs/Signal/Time.elm',
  'Mouse': '/docs/Signal/Mouse.elm',
  'HTTP': '/docs/Signal/HTTP.elm',
  'Keyboard': '/docs/Signal/Keyboard.elm',
  'KeyboardRaw': '/docs/Signal/KeyboardRaw.elm',
  'Touch': '/docs/Signal/Touch.elm',
  'Window': '/docs/Signal/Window.elm',
  'Random': '/docs/Signal/Random.elm',
  'Signal': '/docs/Signal/Signal.elm',
  'Date': '/docs/Date.elm',
  'Color': '/docs/Graphics/Color.elm',
  'Text': '/docs/Graphics/Text.elm',
  'Element': '/docs/Graphics/Element.elm',
  'Graphics': '/docs/Graphics/Element.elm',
  'JavaScript': '/docs/Foreign/JavaScript.elm',
  'Automaton': '/docs/Automaton.elm',
  'Syntax': '/learn/Syntax.elm' /* Pseudo module, used to open documentation when word is identified as 'keyword' by CodeMirror */
};

function compile(formTarget) {
  var form = document.getElementById('inputForm');
  form.target = formTarget;
  form.submit();
}

function showTypeView() {
  var edb = document.getElementById('editor_box');
  edb.style.bottom = '60px';
  editor.refresh();
  var typeView = document.getElementById('doc_type');
  typeView.style.visibility = 'visible';
}

function hideTypeView() {
  var edb = document.getElementById('editor_box');
  edb.style.bottom = '36px';
  editor.refresh();
  var typeView = document.getElementById('doc_type');
  typeView.style.visibility = 'hidden';
}

function parseDoc(mods) {
  var markdown = new Showdown.converter();
  var ds = mods.modules.map(function (m) {
    var fs = m.values.map(function (f) {
      return {name: f.name, type: f.type, module: m.name, desc: markdown.makeHtml(f.desc)};
    });
    return fs;
  });

  var result = {};
  result.docs = ds.reduce(function (acc, val) { return acc.concat(val); }, []);
  var test_desc = markdown.makeHtml('This lets you reuse code, avoid repeating\ncomputations, and improve code readability.\n\n    let c = hypotenuse 3 4 in\n      c*c\n\n    let c1 = hypotenuse 7 12\n        c2 = hypotenuse 3 4\n    in  hypotenuse c1 c2\n\nLet-expressions are also indentation sensitive, so each definition\nshould align with the one above it.\n');
  result.docs.push({name: 'let', type: 'Keyword', module: 'Syntax', desc:test_desc });
  result.modules = mods;
  result.elmModuleToPageMap = elmModuleToPageMap;
  return result;
}

function loadDoc () {
  var req = new XMLHttpRequest();
  req.onload = function () { elmDocs = parseDoc(JSON.parse(this.responseText)); };
  req.open('GET', '/docs', true);
  req.send();
}

function moduleRef (module) {
  var ref = elmDocs.elmModuleToPageMap[module];
  if (! ref) {
    console.log('elmModuleToPageMap: unknown module: ' + module);
  }
  return ref;
}

function lookupDocs(token, type) {
  var ds = null;
  if (type == 'keyword' && token != 'let') {
    ds = [{
      name: token,
      type: 'Keyword',
      module: 'Syntax'
    }];
  } else {
    if (token) {
      ds = elmDocs.docs.filter(function(x) { if (x.name == token) return true; });
    }
  }
  return ds;
}

function getQualifier (token, line) {
  var ch = token.start;
  if (ch > 0) {
    var t = editor.getTokenAt({line: line, ch: ch - 1});
    if (t.type == 'qualifier') {
      return t;
    }
  }
  return null;
}

function getTokenAtIgnoreSpace (pos) {
  var ch = pos.ch;
  var token = editor.getTokenAt({line: pos.line, ch: ch});
  while (!token.type && ch  > 0) {
    ch = ch - 1;
    token = editor.getTokenAt({line: pos.line, ch: ch});
  }
  return token;
}

function openDocPage () {
  var current_pos = editor.getCursor(true);
  var token = getTokenAtIgnoreSpace(current_pos);
  var ds = token.type ? lookupDocs(token.string, token.type) : null;
  var ref = null;
  if (ds && ds.length > 0) {
    if (ds.length > 1) {
      var q = getQualifier(token, current_pos.line);
      if (q) {
        ref = moduleRef(ds.filter(function(o) { if (o.module == q.string.slice(0,-1)) return true;})[0].module);
      }
    } else {
      ref = moduleRef(ds[0].module);
    }
  }
  if (ref) {
    window.open(ref, 'elm-docs');
  }
}

function clearView(id) {
  var elem = document.getElementById(id);
  if (elem) {
    elem.innerHTML = '';
  }
}

function clearDocView () {
  clearView('doc_desc');
}

function generateView (content, contentIsHtml, cssClass) {
    var div = document.createElement("div");
    div.className = cssClass;
    if (contentIsHtml) {
      div.innerHTML = content;
    } else {
      div.appendChild(document.createTextNode(content));
    }
    return div;
}

function getDocForTokenAt (pos) {
  var doc = null;
  var token = getTokenAtIgnoreSpace(pos);
  var docs = token.type ? lookupDocs(token.string, token.type) : null;

  if (docs && docs.length > 0) {
    if (docs.length > 1) {
      var q = getQualifier(token, pos.line);
      if (q) {
        doc = docs.filter(function(o) { if (o.module == q.string.slice(0,-1)) return true;})[0];
      } else {
        doc = {};
        doc.error = 'Ambiguous: ' + token.string + ' defined in ' + docs.map(function(o) { return o.module; }).join(' and ');
      }
    } else {
      doc = docs[0];
    }
  }
  return doc;
}

function typeAsText (doc) {
  var result = doc.module ? doc.module + '.' : '';
  result += doc.name + ' : ' + doc.type;
  return result;
}

function showDoc () {
  var current_pos = editor.getCursor(true);
  clearView('doc_desc');

  var doc = getDocForTokenAt(current_pos);
  var typeText = "";
  var desc = "";

  if (doc && doc.error) {
    typeText = doc.error;
  } else if (doc) {
    typeText = typeAsText(doc);
    desc = doc.desc;
    if (!desc || desc === "") {
      desc = 'No description found';
    }
  } else {
    return;
  }

  var type_div = generateView(typeText, false, 'doc_type');
  var doc_div = generateView(desc, true, 'doc');
  var docView = document.getElementById('doc_desc');

  docView.appendChild(type_div);
  docView.appendChild(doc_div);
  docView.style.visibility = 'visible';
}

function toggleDocView () {
  var docView = document.getElementById('doc_desc');
  if (docView.style.visibility == 'hidden') {
    showDoc();
  } else {
    clearView('doc_desc');
    docView.style.visibility = 'hidden';
  }
}

function updateTypeView () {
  var current_pos = editor.getCursor(true);

  clearView('doc_type');

  var doc = getDocForTokenAt(current_pos);
  var typeText = "";

  if (doc && doc.error) {
    typeText = doc.error;
  } else if (doc) {
    typeText = typeAsText(doc);
  }

  var type_div = generateView(typeText, false, 'doc_type');
  var typeView = document.getElementById('doc_type');
  typeView.appendChild(type_div);
}

function toggleShowType(enable) {
  if (enable) {
    showTypeView();
    editor.on('cursorActivity', updateTypeView);
    updateTypeView();
  } else {
    hideTypeView();
    editor.off('cursorActivity', updateTypeView);
  }
  cookie('showtype', enable);
}

function toggleOptions(show) {
  var opts = document.getElementById('editor_options');
  opts.style.visibility = show ? 'visible' : 'hidden';
  var box = document.getElementById('editor_box');
  box.style.bottom = show ? '60px' : '36px';
}

function toggleLines(on) {
  editor.setOption('lineNumbers', on);
  cookie('lineNumbers', on);
}

var delay;
function toggleAutoCompile(enable) {
  document.getElementById('compile_button').disabled = enable;
  if (enable) {
    editor.on('change', updateOutput);
  } else {
    editor.off('change', updateOutput);
  }
  cookie('autocompile', enable);
}

function updateOutput() {
  clearTimeout(delay);
  delay = setTimeout(compileOutput, 1000);
}

function compileOutput() {
  compile('output');
}

function setTheme() {
  var input = document.getElementById('editor_theme');
  var theme = input.options[input.selectedIndex].innerHTML;
  editor.setOption('theme', theme);
  cookie('theme', theme);
}

function setZoom() {
  var editorDiv  = document.getElementsByClassName('CodeMirror')[0],
      classes    = editorDiv.getAttribute('class').split(' '),
      input      = document.getElementById('editor_zoom'),
      zoomLevel  = input.options[input.selectedIndex].innerHTML,
      zoom       = 'zoom-' + zoomLevel.slice(0,-1),
      newClasses = [];
  for (var i = classes.length; i--; )
    if (!(classes[i].match(/^zoom-/)))
      newClasses.push(classes[i]);
  newClasses.push(zoom);
  editorDiv.setAttribute('class', newClasses.join(' '));
  cookie('zoom', zoomLevel);
}

function cookie(name,value) { createCookie(name, value, 5*365); }

function createCookie(name,value,days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime()+(days*24*60*60*1000));
    expires = "; expires=" + date.toGMTString();
  }
  document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}

function eraseCookie(name) {
  createCookie(name,"",-1);
}

function initLines() {
  var lines = readCookie('lineNumbers');
  if (lines) {
    lines = lines == 'true';
    document.getElementById('editor_lines').checked = lines;
    return lines;
  }
  return false;
}

function initTheme() {
  var theme = readCookie('theme');
  if (theme) {
    document.getElementById('editor_theme').value = theme;
    return theme;
  }
  return 'vibrant-ink';
}

function initZoom() {
  var zoom = readCookie('zoom');
  if (zoom) {
    document.getElementById('editor_zoom').value = zoom;
    setZoom();
  }
}

function initTypeView() {
  var showType = readCookie('showtype') == 'true';
  if (showType) {
    document.getElementById('show_type_checkbox').checked = showType;
    toggleShowType(showType);
  }
  var doc_type = document.getElementById('doc_type');
  doc_type.onclick = openDocPage;
  loadDoc();
}

function initAutocompile() {
  var auto = readCookie('autocompile') == 'true';
  if (auto) {
    document.getElementById('autocompile_checkbox').checked = auto;
    toggleAutoCompile(auto);
  }
}

function initEditor() {
  // global scope editor
  editor = CodeMirror.fromTextArea(document.getElementById('input'),
    { lineNumbers: initLines(),
      matchBrackets: true,
      theme: initTheme(),
      tabMode: 'shift',
      extraKeys: {'Ctrl-Enter': compileOutput, 'Ctrl-K': toggleDocView, 'Shift-Ctrl-K': openDocPage }
    });
  editor.focus();
  editor.on('cursorActivity', clearDocView);
  initAutocompile();
  initTypeView();
  initZoom();
}

/* jshint browser: true */
/* jshint devel: true */
/* jshint undef: true */
/* jshint unused: true */
/* jshint unused: true */
/* global CodeMirror */
/* global Showdown */
/* exported initEditor */
/* exported toggleOptions */
/* exported toggleLines */
/* exported setTheme */
/* exported eraseCookie */
