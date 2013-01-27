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

function clearHint() {
  hint = document.getElementById('type_info').firstChild;
  if (hint) {
    hint.parentNode.removeChild(hint);
  }
}

function moduleRef (module) {
  var moduleMap = {
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
    'Syntax': '/learn/Syntax.elm'
  };

  var ref = moduleMap[module];
  if (! ref) {
    console.log('moduleMap: unknown module: ' + module);
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
      ds = docs.filter(function(x) { if (x.name == reg) return true; });
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

function updateHints() {
  var current_pos = editor.getCursor(true);

  clearHint();

  var token = getTokenAtIgnoreSpace(current_pos);
  var ds = token.type ? lookupDocs(token.string, token.type) : null;

  if (ds && ds.length > 0) {

    var hint = "";

    if (ds.length > 1) {
      var q = getQualifier(token, current_pos.line);
      if (q) {
        hint = q.string + ds.filter(function(o) { if (o.module == q.string.slice(0,-1)) return true;})[0].type;
      } else {
        hint = 'Ambiguous: ' + token.string + ' defined in ' + ds.map(function(o) { return o.module; }).join(' and ');
      }
    } else {
      hint = ds[0].module ? ds[0].module + '.' : '';
      hint += ds[0].type;
    }

    var msg = document.createElement("div");
    msg.className = "hint";

    var msg_type = document.createElement("div");
    msg_type.className = "hint_type";
    msg_type.appendChild(document.createTextNode(hint));

    msg.appendChild(msg_type);

    var typeView = document.getElementById('type_info');
    typeView.appendChild(msg);
  }
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
    clearHint();
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
}

function initAutocompile() {
  var auto = readCookie('autocompile') == 'true';
  if (auto) {
    document.getElementById('autocompile_checkbox').checked = auto;
    toggleAutoUpdate(auto);
  }
}
