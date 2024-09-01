"use client";
import { deleteTodo } from "@/app/actions/todoActions";
import { Button } from "@/components/ui/Button";
import Form from "../ui/Form";
import Input from "../ui/Input";
import { todoType } from "@/types/todoType";
import { BsFillTrashFill } from "react-icons/bs";

const DeleteTodo = ({ todo }: { todo: todoType }) => {
  return (
    <Form action={deleteTodo}>
      <Input type="hidden" name="inputId" value={todo.id} />
      <Button>
        <BsFillTrashFill />
      </Button>
    </Form>
  );
};

export default DeleteTodo;
