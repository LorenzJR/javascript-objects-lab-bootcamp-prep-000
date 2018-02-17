var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  var newobj = Object.assign({}, object, {[key]: value})
  return object, newobj;
}