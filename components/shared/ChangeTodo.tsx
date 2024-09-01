import Form from "../ui/Form";
import { Button } from "@/components/ui/Button";
import Input from "../ui/Input";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { changeStatus } from "@/app/actions/todoActions";
import { todoType } from "@/types/todoType";

const ChangeTodo = ({ todo }: { todo: todoType }) => {
  return (
    <Form action={changeStatus}>
      <Input name="inputId" value={todo.id} type="hidden" />
      <Button>
        <AiOutlineCheckCircle />
      </Button>
    </Form>
  );
};

export default ChangeTodo;
