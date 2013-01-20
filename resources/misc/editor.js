function compile(formTarget) {
  var form = document.getElementById('inputForm');
  form.target = formTarget;
  form.submit();
}

activeHint = null;
function removeHint() {
    if (activeHint) {
      editor.removeLineWidget(activeHint);
      activeHint = null;
    }
}

function lookupType(reg) {
  return docs[reg] ? docs[reg].type : null;
}

function lookupModule(reg) {
  return docs[reg] && docs[reg].module != '' ? docs[reg].module + '.' : '';
}


function lookupDescription(reg) {
  return docs[reg] ? docs[reg].desc : "-- no description";
}

function lookupReference(reg) {
  return docs[reg] ? docs[reg].ref : "#";
}

function findPreviousToken(pos) {
  while (! editor.getTokenAt(pos).type && pos.ch  > 0) {
    pos.ch = pos.ch > 0 ? pos.ch - 1 : 0;
  }
  return editor.getTokenAt(pos);
}

function updateHints() {
  editor.operation(function(){
    removeHint();

    pos = editor.getCursor();
    token = findPreviousToken(pos);
    if (token.type && lookupType(token.string)) {
      hint = ""
      if (token.type) {
        hint = lookupModule(token.string)  + lookupType(token.string);
      }
      hintDetail = ""
      if (token.type) {
        hintDetail += lookupDescription(token.string)
      }

      var msg = document.createElement("div");
      msg.className = "hint";

      var msg_type = document.createElement("div");
      msg_type.className = "hint_type";
      msg_type.appendChild(document.createTextNode(hint));

      var msg_detail = document.createElement("div");
      msg_detail.className = "hint_text"
      msg_detail.innerHTML = hintDetail;

      msg.appendChild(msg_type);
      msg.appendChild(msg_detail);

      msg.onclick = function () {
        window.open(lookupReference(token.string), 'elm-docs');
      }

      activeHint = editor.addLineWidget(editor.getCursor().line, msg, {coverGutter: false, noHScroll: true});
    }
  });

  var info = editor.getScrollInfo();
  var after = editor.charCoords({line: editor.getCursor().line + 1, ch: 0}, "local").top;
  if (info.top + info.clientHeight < after) {
    editor.scrollTo(null, after - info.clientHeight + 3);
  }
}

function toggleHintsAndCheckbox()  {
  var cb = document.getElementById('hints_checkbox');
  cb.checked = cb.checked ? false : true;
  toggleHints(cb.checked);
}

function toggleHints(enable) {
  if (enable) {
    editor.on('cursorActivity', updateHints);
  } else {
    editor.off('cursorActivity', updateHints);
    removeHint();
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
}

function initAutocompile() {
  var auto = readCookie('autocompile') == 'true';
  if (auto) {
    document.getElementById('autocompile_checkbox').checked = auto;
    toggleAutoUpdate(auto);
  }
}
