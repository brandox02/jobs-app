

export function parseIntKeysInObject(obj, keys) {
   const copyObj = { ...obj };

   keys.forEach(item => {
      copyObj[item] = parseInt(copyObj[item]);
   });

   return copyObj;
}