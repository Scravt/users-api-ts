"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUsuario = exports.putUsuario = exports.postUsuario = exports.getUsuario = exports.getUsuarios = void 0;
const usuario_1 = __importDefault(require("../models/usuario"));
const getUsuarios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const usuarios = yield usuario_1.default.findAll();
        res.json({ usuarios });
    }
    catch (error) {
        res.status(500).json({ msg: "Error al obtener usuarios", error });
    }
});
exports.getUsuarios = getUsuarios;
const getUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const usuario = yield usuario_1.default.findByPk(id);
        if (!usuario) {
            res.status(404).json({ msg: "Usuario no encontrado" });
            return;
        }
        res.json(usuario);
    }
    catch (error) {
        res.status(500).json({ msg: "Error al obtener el usuario", error });
    }
});
exports.getUsuario = getUsuario;
const postUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email, estado } = req.body;
        const usuario = yield usuario_1.default.create({ name, email, estado });
        res.status(201).json(usuario);
    }
    catch (error) {
        res.status(500).json({ msg: "Error al crear usuario", error });
    }
});
exports.postUsuario = postUsuario;
const putUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const usuario = yield usuario_1.default.findByPk(id);
        if (!usuario) {
            res.status(404).json({ msg: "Usuario no encontrado" });
            return;
        }
        yield usuario.update(req.body);
        res.json(usuario);
    }
    catch (error) {
        res.status(500).json({ msg: "Error al actualizar usuario", error });
    }
});
exports.putUsuario = putUsuario;
const deleteUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const usuario = yield usuario_1.default.findByPk(id);
        if (!usuario) {
            res.status(404).json({ msg: "Usuario no encontrado" });
            return;
        }
        yield usuario.destroy();
        res.json({ msg: "Usuario eliminado correctamente" });
    }
    catch (error) {
        res.status(500).json({ msg: "Error al eliminar usuario", error });
    }
});
exports.deleteUsuario = deleteUsuario;
//# sourceMappingURL=usuario.js.map