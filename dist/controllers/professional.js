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
exports.deleteProfessional = exports.putProfessional = exports.postProfessional = exports.getProfessionalByArea = exports.getProfessional = exports.getProfessionals = void 0;
const professional_1 = __importDefault(require("../models/professional"));
const getProfessionals = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const professionals = yield professional_1.default.findAll();
        res.json({ professionals });
    }
    catch (error) {
        res.status(500).json({ msg: "Error al obtener profesionales", error });
    }
});
exports.getProfessionals = getProfessionals;
const getProfessional = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const professional = yield professional_1.default.findByPk(id);
        if (!professional) {
            res.status(404).json({ msg: "Profesional no encontrado" });
            return;
        }
        res.json(professional);
    }
    catch (error) {
        res.status(500).json({ msg: "Error al obtener el profesional", error });
    }
});
exports.getProfessional = getProfessional;
const getProfessionalByArea = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { area } = req.params;
        const professionals = yield professional_1.default.findAll({ where: { area } });
        if (!professionals) {
            res.status(404).json({ msg: "Profesional no encontrado" });
            return;
        }
        res.json(professionals);
    }
    catch (error) {
        res.status(500).json({ msg: "Error al obtener el profesional", error });
    }
});
exports.getProfessionalByArea = getProfessionalByArea;
const postProfessional = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { nombre, email, area } = req.body;
        const professional = yield professional_1.default.create({ nombre, email, area });
        res.status(201).json(professional);
    }
    catch (error) {
        res.status(500).json({ msg: "Error al crear profesional", error });
    }
});
exports.postProfessional = postProfessional;
const putProfessional = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const professional = yield professional_1.default.findByPk(id);
        if (!professional) {
            res.status(404).json({ msg: "Profesional no encontrado" });
            return;
        }
        yield professional.update(req.body);
        res.json(professional);
    }
    catch (error) {
        res.status(500).json({ msg: "Error al actualizar profesional", error });
    }
});
exports.putProfessional = putProfessional;
const deleteProfessional = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const professional = yield professional_1.default.findByPk(id);
        if (!professional) {
            res.status(404).json({ msg: "Profesional no encontrado" });
            return;
        }
        yield professional.destroy();
        res.json({ msg: "Profesional eliminado" });
    }
    catch (error) {
        res.status(500).json({ msg: "Error al eliminar profesional", error });
    }
});
exports.deleteProfessional = deleteProfessional;
//# sourceMappingURL=professional.js.map