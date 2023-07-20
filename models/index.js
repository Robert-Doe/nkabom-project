const InternshipTheme = require("./InternshipTheme");
const Supervisor = require("./Supervisor");
const ThemeSupervisor=require('./ThemeSupervisor')

//InternshipThemeSupervisors
ThemeSupervisor.belongsTo(InternshipTheme, { foreignKey: 'themeId' });
ThemeSupervisor.belongsTo(Supervisor, { foreignKey: 'supervisorId' });

InternshipTheme.hasMany(ThemeSupervisor, { foreignKey: 'themeId' });
Supervisor.hasMany(ThemeSupervisor, { foreignKey: 'supervisorId' });





module.exports={Supervisor,InternshipThemes,ThemeSupervisor}