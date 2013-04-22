var elmDocs = null;

var moduleToPageMap = {
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
  'Experimental': '/docs/Foreign/JavaScript/Experimental.elm',
  'JSON': '/docs/Foreign/JavaScript/JSON.elm',
  'Automaton': '/docs/Automaton.elm',
  'Syntax': '/learn/Syntax.elm' /* Pseudo module, used to open documentation when word is identified as 'keyword' by CodeMirror */
};


function compile(formTarget) {
  var form = document.getElementById('inputForm');
  form.target = formTarget;
  form.submit();
}

function showHint() {
  edb = document.getElementById('editor_box');
  edb.style.bottom = '60px';
  editor.refresh();
  typeView = document.getElementById('type_info');
  typeView.style.visibility = 'visible';
}

function hideHint() {
  edb = document.getElementById('editor_box');
  edb.style.bottom = '36px';
  editor.refresh();
  typeView.style.visibility = 'hidden';
}

function parseDoc(mods) {
  var ds = mods.modules.map(function (m) {
    var fs = m.values.map(function (f) {
      return {name: f.name, type: f.type, module: m.name, desc: markdown.makeHtml(f.desc)};
    });
    return fs;
  });

  result = {};
  result.docs = ds.reduce(function (acc, val) { return acc.concat(val); }, []);
  result.modules = mods;
  result.moduleToPageMap = moduleToPageMap;
  return result;
}

function loadDoc () {
  var req = new XMLHttpRequest();
  req.onload = function () { elmDocs = parseDoc(JSON.parse(this.responseText)); }
  req.open('GET', '/docs', true);
  req.send()
}

function moduleRef (module) {
  var ref = elmDocs.moduleToPageMap[module];
  if (! ref) {
    console.log('moduleToPageMap: unknown module: ' + module);
  }
  return ref;
}

function lookupDocs(reg, type) {
  var ds = null;
  if (type == 'keyword') {
    ds = [{
      name: reg,
      type: 'Keyword',
      module: 'Syntax',
    }];
  } else {
    if (reg) {
      ds = elmDocs.docs.filter(function(x) { if (x.name == reg) return true; });
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

function openDoc () {
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
  elem = document.getElementById(id);
  if (elem) {
    elem.innerHTML = '';
  }
}

function generateView (content, contentIsHtml, outerCssClass, innerCssClass) {
    var outerDiv = document.createElement("div");
    outerDiv.className = outerCssClass;

    var innerDiv = document.createElement("div");
    innerDiv.className = innerCssClass;
    if (contentIsHtml) {
      innerDiv.innerHTML = content;
    } else {
      innerDiv.appendChild(document.createTextNode(content));
    }

    outerDiv.appendChild(innerDiv);
    return outerDiv;
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

function showDoc () {
  var current_pos = editor.getCursor(true);

  clearView('doc_info');

  var doc = getDocForTokenAt(current_pos);
  var hint = "";
  var desc = "";

  if (doc && doc.error) {
    hint = doc.error;
  } else if (doc) {
    hint = doc.module ? doc.module + '.' : '';
    hint += doc.type;
    desc = doc.desc;
  }

  var type_div = generateView(hint, false, 'hint', 'hint_type');

  var doc_div = generateView(desc, true, 'doc', 'doc_type');

  var docView = document.getElementById('doc_info');
  docView.appendChild(type_div);
  docView.appendChild(doc_div);
  docView.style.visibility = 'visible';
}

function toggleDoc () {
  var docView = document.getElementById('doc_info');
  if (docView.style.visibility == 'hidden') {
    showDoc();
  } else {
    clearView('doc_info');
    docView.style.visibility = 'hidden';
  }
}

function updateHints () {
  var current_pos = editor.getCursor(true);

  clearView('type_info');

  var doc = getDocForTokenAt(current_pos);
  var hint = "";

  if (doc && doc.error) {
    hint = doc.error;
  } else if (doc) {
    hint = doc.module ? doc.module + '.' : '';
    hint += doc.type;
  }

  var msg = generateView(hint, false, 'hint', 'hint_type');

  var typeView = document.getElementById('type_info');
  typeView.appendChild(msg);
}

function toggleHintsAndCheckbox()  {
  var cb = document.getElementById('hints_checkbox');
  cb.checked = cb.checked ? false : true;
  toggleHints(cb.checked);
}

function toggleHints(enable) {
  if (enable) {
    showHint();
    editor.on('cursorActivity', updateHints);
    updateHints();
  } else {
    hideHint();
    editor.off('cursorActivity', updateHints);
    clearHint('type_info');
  }
  cookie('hints', enable);
};

function toggleOptions(show) {
  var opts = document.getElementById('editor_options');
  opts.style.visibility = show ? 'visible' : 'hidden';
  var box = document.getElementById('editor_box');
  box.style.bottom = show ? '60px' : '36px';
}

function toggleLines(on) {
  editor.setOption('lineNumbers', on);
  cookie('lineNumbers', on);
};

var delay;
function toggleAutoUpdate(enable) {
  document.getElementById('compile_button').disabled = enable;
  if (enable) {
    editor.on('change', updateOutput);
  } else {
    editor.off('change', updateOutput);
  }
  cookie('autocompile', enable);
};

function updateOutput() {
  clearTimeout(delay);
  delay = setTimeout(compileOutput, 1000);
};

function compileOutput() {
  compile('output');
};

function setTheme() {
  var input = document.getElementById('editor_theme');
  var theme = input.options[input.selectedIndex].innerHTML;
  editor.setOption('theme', theme);
  cookie('theme', theme);
};

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
};

function cookie(name,value) { createCookie(name, value, 5*365); }

function createCookie(name,value,days) {
  if (days) {
    var date = new Date();
    date.setTime(date.getTime()+(days*24*60*60*1000));
    var expires = "; expires="+date.toGMTString();
  }
  else var expires = "";
  document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
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

function initHints() {
  var hints = readCookie('hints') == 'true';
  if (hints) {
    document.getElementById('hints_checkbox').checked = hints;
    toggleHints(hints);
  }
  var type_info = document.getElementById('type_info');
  type_info.onclick = openDoc;
  loadDoc();
}

function initAutocompile() {
  var auto = readCookie('autocompile') == 'true';
  if (auto) {
    document.getElementById('autocompile_checkbox').checked = auto;
    toggleAutoUpdate(auto);
  }
}
