interface Computador{
    getRam():number;
    getCpu():number;
    getType():string;
    getHdd():number;
    
};

class Pc implements Computador {
    ram:number;
    cpu:number; 
    type:string;
    hdd:number;

    constructor(type:string, ram:number, hdd:number, cpu:number){
        this.ram = ram;
        this.cpu = cpu;
        this.type = type;
        this.hdd = hdd;
    }
    getRam():number{
        return this.ram;
    };
    getCpu():number{
        return this.cpu;
    };
    getType():string{
        return this.type;
    };
    getHdd():number{
        return this.hdd;
    };
    toString(){
        console.log(`Ram: ${this.getRam} GB`);
        console.log(`Cpu: ${this.getCpu} GHz`);
        console.log(`Hdd: ${this.getHdd} GB`);
        console.log(`Type: ${this.getType}`);
    }
}
class Server implements Computador {
    ram:number;
    cpu:number; 
    type:string;
    hdd:number;

    constructor(type:string, ram:number, hdd:number, cpu:number){
        this.ram = ram;
        this.cpu = cpu;
        this.type = type;
        this.hdd = hdd;
    }
    getRam():number{
        return this.ram;
    };
    getCpu():number{
        return this.cpu;
    };
    getType():string{
        return this.type;
    };
    getHdd():number{
        return this.hdd;
    };
}

class Fabrica {
    static novoPc(type: string, ram: number, hdd: number, cpu: number): Computador {
        if (type === "pc") {
            return new Pc(type, ram, hdd, cpu);
        } else if (type === "server") {
            return new Server(type, ram, hdd, cpu);
        } else {
            throw new Error("Tipo de computador inválido");
        }
    }
}
