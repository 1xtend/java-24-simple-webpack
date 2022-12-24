export function logGroup(groupName, message) {
  console.group(groupName);
  console.log(message);
  console.groupEnd();
}
