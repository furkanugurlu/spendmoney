import { Form, Input, Button, Result } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { AppState } from "../store";
import { login } from "../store/actions/userActions";
import { LoginForm } from "../types/user";
import { showError, showSuccess } from "../utils/showError";

interface LocationState {
  newSignUp?: boolean;
}
export default function Login() {
  const locations = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = locations.state as LocationState;
  const { data, loading, error } = useSelector((state: AppState) => state.user);

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not a valid email!",
      number: "${label} is not a valid number!",
    },
    number: {
      range: "${label} must be between ${min} and ${max}",
    },
  };

  const onFinish = (values: LoginForm) => {
    dispatch(login(values) as any);
  };

  useEffect(() => {
    error && showError(error);
  }, [error]);

  useEffect(() => {
    data.username && showSuccess("You have successfully logged in!");
  }, [data.username]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/");
    }
  }, [data]);

  return (
    <Form
      {...layout}
      name="nest-messages"
      onFinish={onFinish}
      validateMessages={validateMessages}
    >
      <h2 style={{ textAlign: "center", marginBottom: 40 }}>Pleas Login</h2>
      {location?.newSignUp && (
        <Result
          status="success"
          title="You successfully signed up.!"
          subTitle="Pleas login using your credentials"
        />
      )}
      <Form.Item
        name={"username"}
        label="Username"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[
          { required: true, message: "Please input your password!", min: 6 },
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}
