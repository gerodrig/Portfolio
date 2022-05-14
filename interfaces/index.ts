import { IconType } from 'react-icons';

export interface Iskills {
    name: string;
    Icon: IconType;
    skills?: IskillList;
    description?: string;
}

export interface IskillList {
    [key: string]: Iskill[];
}

export interface Iskill {
    name: string;
    level: string;
    Icon: IconType;
}

export interface IResume {
    education: IEducation[];
    employment: IEmployment[];
}

export interface IEducation {
    name: string;
    title: string;
    startDate: string;
    endDate: string;
}

export interface IEmployment extends IEducation {
    description?: string;
    responsibilities?: string[];
}

export interface IProject {
    name: string;
    description: string;
    imagePath: string;
    deployedLink: string;
    githubLink: string;
    category: Category[];
    technology: string[];
    technologyIcon: IconType[];
}

export type Category =
    | 'angular'
    | 'express'
    | 'firebase'
    | 'ionic'
    | 'javascript'
    | 'mobile'
    | 'mongo'
    | 'nextjs'
    | 'node'
    | 'react'
    | 'socketio'
    | 'typescript'
    | 'xamarin';
