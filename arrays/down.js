/**
   * Moves the item towards array.length by 1
   * NOTE: compare based on reference to object in memory.
   * @param item
   * @param array
   * @returns {Object} A reference to the item that was passed to the function
   */
  function down(item, array) {
      var index = findIndex(item, array),
          toIndex = index + 1;

      if(index !== -1 && toIndex < array.length) {
          array.splice(toIndex, 0, array.splice(index, 1)[0]);
      }
      return item;
  }
