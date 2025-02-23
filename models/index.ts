import Usuario from "./usuario";
import Professional from "./professional";
import Appoimtment from "./appointment";


//turnos
Appoimtment.belongsTo(Professional, {foreignKey: 'professional_id'});
Appoimtment.belongsTo(Usuario, {foreignKey: 'user_id'});

//profesionales
Professional.hasMany(Appoimtment, {foreignKey: 'professional_id'});

//usuarios
Usuario.hasMany(Appoimtment, {foreignKey: 'user_id'});


export {Usuario, Professional, Appoimtment};