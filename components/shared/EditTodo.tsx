"use client";
import { edit } from "@/app/actions/todoActions";
import Form from "../ui/Form";
import { Button } from "@/components/ui/Button";
import Input from "../ui/Input";
import { useState } from "react";
import { todoType } from "@/types/todoType";
import { BiEdit } from "react-icons/bi";

const EditTodo = ({ todo }: { todo: todoType }) => {
  const [editTodo, setEditTodo] = useState(false);

  const handleEdit = () => {
    if (todo.isCompleted === true) {
      return;
    }
    setEditTodo(!editTodo);
  };

  const handleSubmit = () => {
    setEditTodo(false);
  };
  return (
    <div className="flex gap-5 items-center">
      <Button onClick={handleEdit}>
        <BiEdit />
      </Button>
      {editTodo ? (
        <Form action={edit} onSubmit={handleSubmit}>
          <Input name="inputId" value={todo.id} type="hidden" />
          <div className="flex justify-center">
            <Input type="text" name="newTitle" placeholder="Edit Todo..." />
            <Button>save</Button>
          </div>
        </Form>
      ) : null}
    </div>
  );
};

export default EditTodo;
