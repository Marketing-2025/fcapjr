import { AxiosPromise } from 'axios';
import apiRDStation from './api';
import { useMutation } from '@tanstack/react-query';

interface IContact {
    name?: string; // Nome do contato
    email: string; // Email do contato (required)
    job_title?: string; // Cargo do contato
    birthdate?: string; // Data de Aniversário
    bio?: string; // Anotações sobre contato
    website?: string; // Site do contato
    personal_phone?: string; // Telefone do contato
    mobile_phone?: string; // Telefone do contato
    city?: string; // Cidade do contato
    state?: string; // Estado do contato
    country?: string; // País do contato
    twitter?: string; // Twitter do contato
    facebook?: string; // Facebook do contato
    linkedin?: string; // LinkedIn do contato
    tags?: string[]; // Tags do contato
    legal_bases?: legal_bases_object[]; // Bases legais do contato
}

interface legal_bases_object {
    category?: string; // Categoria da base legal
    type?: string; // Tipo da base legal
    status?: string; // Status da base legal
}

export interface ICreateContactResponse extends IContact {
    links?: {
        rel: string; // Link rel do contato
        href: string; // URL do contato
        media: string; // Media do contato
        type: string; // Tipo do contato
    }[]
}

const createNewContact = async (body: IContact): AxiosPromise<ICreateContactResponse> => {
    const response = await apiRDStation.post('/create-contact', body);

    return response.data;
};

export const useCreateNewContact = (rest: any): any => {
    const mutate = useMutation({
        mutationFn: (body: IContact) => createNewContact(body),
        ...rest,
    });

    return mutate;
}
