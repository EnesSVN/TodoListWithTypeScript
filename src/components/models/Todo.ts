export interface TodoReadDTO {
  id: string;
  description: string;
  done: boolean;
  updatedAt: string;
}

export interface TodoCreateDTO {
  description: string;
}

export interface TodoUpdateDTO extends TodoCreateDTO {
  id: TodoReadDTO["id"];
  done: boolean;
}

export interface TodoDeleteDTO {
  id: TodoReadDTO["id"];
}
