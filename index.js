var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  var newobj = assign.Object({}, object, {[key]: value})
  return object, newobj;
}