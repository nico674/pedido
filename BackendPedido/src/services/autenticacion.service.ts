import { /* inject, */ BindingScope, injectable} from '@loopback/core';
import { repository } from '@loopback/repository';
import { PersonaRepository } from '../repositories';
import {Persona} from '../models';
import { Llaves } from '../config/llaves';
const generador = require("password-generator");
const cryptoJs = require("crypto-js");//importacion de paquetes
const JWT= require("jsonwebtoken");

@injectable({scope: BindingScope.TRANSIENT})
export class AutenticacionService {
  constructor
  (/* Add @inject to inject parameters */
  @repository(PersonaRepository)
    public PersonaRepository: PersonaRepository
  ) {}
  
  
  /*
   * here go methods
   */
  /*GenerarClave() --> invoca al generador o paquete de la linea 2 para que cree una password random */
  GenerarClave()
  {
    let clave = generador(8, false);
    return clave;
  }
  // metodo para cifrar la clave
  CifrarClave(clave: string)
  {
    let claveCifrada = cryptoJs.MD5(clave).toString();//  MD5 ==>metodo de cifrado
    return claveCifrada;
  }

  IdentificarPersona(usuario: string, clave: string) 
  {
    try 
      {
    let p =this.PersonaRepository.findOne({where: {correo: usuario, clave: clave}});  
    if(p)
        {
          return p;
        }
        return false; 
      }
    catch
    {
      return false; 
    }
  }
  GenerarTokenJWT(Persona:Persona)
  {
    let token = JWT.sign
    ({
      data: {
        id:Persona.id,
        correo:Persona.correo,
        nombre:Persona.nombres+" "+Persona.apellidos
      }
    },
      Llaves.claveJWT)//firma del token
      return token;
  }
  ValidarTokenJWT(token:string)
  {
    try 
    {
    let datos = JWT.verify(token, Llaves.claveJWT);
    return datos;
    } 
    catch 
    {
      return false;
    }
  }
}

