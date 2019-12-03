module.exports = {
  counterUp(modules) {
    if (!Array.isArray(modules)) {
      throw new Error("Bad data");
    }

    return modules
      .map(i => Math.floor(i/3) - 2)
      .reduce((sum, item) => sum + item, 0) || false;
  },

  counterUpWithFuelMass(modules) {
    // The following data structure represents:
    // [ [ remaining mass, sum of masses ], ... ]
    let modulesWithFuel = modules.map(i => [ Math.floor(i/3) - 2, Math.floor(i/3) - 2 ]);

    // Loop until all remaining masses are > 0
    while (modulesWithFuel.some(([remainder, _]) => remainder > 0)) {
      modulesWithFuel = modulesWithFuel
        .map(([remainder, sum]) => {
          const newMass = Math.floor(remainder/3) - 2;
          // If newly calculated mass is > 0 - add it to the sum
          return [ newMass, newMass > 0 ? sum + newMass : sum ];
        });
    }

    // transform it back to sum of masses
    return modulesWithFuel
      .map(([_, sum]) => sum) // flatmap this stuff into sums
      .reduce((sum, item) => sum + item, 0) || false; // sum everything
  }
};
