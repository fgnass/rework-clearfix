

function declaration(prop, val) {
  return { type: 'declaration', property: prop, value: val }
}

function declare(style) {
  return Object.keys(style).map(function(prop) {
    return declaration(prop, style[prop])
  })
}

function rule(sel, style) {
  return {
    type: 'rule',
    selectors: sel,
    declarations: declare(style)
  }
}

function pseudo(sel, pseudos) {
  var ret = []
  sel.forEach(function(s) {
    pseudos.forEach(function(p) {
      ret.push(s + ':' + p)
    })
  })
  return ret
}

function shouldClear(decl) {
  if (!decl) return
  for (var i=0; i < decl.length; i++) {
    if (decl[i].property == 'clear' && /^(content|fix)$/.test(decl[i].value)) {
      decl.splice(i, 1)
      return true
    }
  }
}

function addClearFix(r, rules) {

  r.declarations.push(declaration('*zoom', '1'))

  var around = pseudo(r.selectors, ['before', 'after'])
  rules.push(rule(around, {
    content: '" "',
    display: 'table'
  }))

  var after = pseudo(r.selectors, ['after'])
  rules.push(rule(after, {
    clear: 'both'
  }))
}

module.exports = function(sheet, rework) {
  var rules = []

  sheet.rules.forEach(function(rule) {
    rules.push(rule)
    if (shouldClear(rule.declarations)) {
      addClearFix(rule, rules)
    }
  })
  sheet.rules = rules
}