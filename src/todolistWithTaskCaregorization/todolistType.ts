type TaskProps={
    title:string;
    description:string;
    category:string;
    completed:boolean;
    dueDate?:string;
    priority?:number;
}
export type TasksProps={
    [categoryId: string]: TaskProps[];
};


type CategoryProps={categoryId:string, categoryTitle:string}

export type TodolistsProps=Array<CategoryProps>