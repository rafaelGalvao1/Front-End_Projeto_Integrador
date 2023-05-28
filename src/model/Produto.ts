import categoria from './Categoria';
import usuario from './Usuario';

interface Produto{
    id: 0, 
    nome: string,
    descricao: string,
    preco: number,      
    validade: string,
    regiao: string,
    fornecedor: string,
    unidade_de_medida: string,
    quantidade: number,
    categoria: categoria |  null,
    usuario: usuario | null,
}

export default Produto;
