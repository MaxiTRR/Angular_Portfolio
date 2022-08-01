export class Contacto{
    id:number = 0;
    email:string = '';
    linkInstagram:string = "https://www.instagram.com/";
    linkLinkedin:string = "https://ar.linkedin.com/";
    linkFacebook:string = "https://www.facebook.com/";
    linkGithub:string = "https://github.com/"
}

export class Cuenta{
    id:number = 0;
    email:string = '';
    userName:string = '';
    password:string = '';
}

export class Direccion{
    id:number = 0;
    pais:string = '';
    provincia:string = '';
    localidad:string = '';
    domicilio:string = '';
    codPostal:number = 0;
    
}

export class Educacion{
    id:number = 0;
    nombreInst:string = '';
    periodo:string = '';
    titulo:string = '';
    descripcion:string = '';
    //certificado:string = '';
    //logo:string = '';
}

export class Exp{
    id:number = 0;
    lugar:string = '';
    periodo:string = '';
    area:string = '';
    rol:string = '';
    //logo:string = '';
}

export class InfoPersoanl{
    id:number = 0;
    titulo:string ='';
    descripcion:string='';
    //imgProfile:string ='';
}

export class Proyectos{
    id:number = 0;
    tituloPro:string = '';
    periodoPro:string = '';
    descripcionPro:string = '';
    //imgProject:string ='';

}