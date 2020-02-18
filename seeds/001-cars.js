
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {
          "VIN": "4S3BK4252X7305536",
          "Make": "Subaru",
          "Model": "Legacy",
          "Milage": 69420,
          "Transmission": "Automatic",
          "Title": "Clean"
        },
        {
          "VIN": "3D7UT2CL2BG587350",
          "Make": "Dodge",
          "Model": "Ram 2500",
          "Milage": 69420,
          "Transmission": "Manual",
          "Title": "Clean"
        },
        {
          "VIN": "5NPEC4ABXDH539433",
          "Make": "Hyundai",
          "Model": "Sonata",
          "Milage": 69420,
          "Transmission": "Automatic",
          "Title": "Dirty"
        },
        {
          "VIN": "1FAFP58S11A177991",
          "Make": "Ford",
          "Model": "Taurus",
          "Milage": 69420,
          "Transmission": "Automatic",
          "Title": "Clean"
        }
      ]);
    });
};
