const modules=[12, 48, 12];

function counterUpWithFuelMass(modules) {
  // The following data structure represents:
  // [ [ remaining mass, sum of masses ], ... ]
  let modulesWithFuel = modules.map(i => [ Math.floor(i/3) - 2, Math.floor(i/3) - 2 ]);
  //console.log(modulesWithFuel);

  // Loop until all remaining masses are > 0
  while (modulesWithFuel.some(([remainder, _]) => remainder > 0)) {
    modulesWithFuel = modulesWithFuel
      .map(([remainder, sum]) => {
        const newMass = Math.floor(remainder/3) - 2;

        //        console.log(newMass);
        //        console.log([ newMass, newMass > 0 ? sum + newMass : sum ]);

        return [ newMass, newMass > 0 ? sum + newMass : sum ];
      });
  }

  console.log(modulesWithFuel);

  // transform it back to sum of masses
  return modulesWithFuel
    .map(([_, sum]) => sum) // flatmap this stuff into sums
    .reduce((sum, item) => sum + item, 0) || false; // sum everything
}


console.log(counterUpWithFuelMass(modules));
