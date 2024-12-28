import {Form, FormGroup, Label, Input, Button } from 'reactstrap';
export default function Register (){
    return (
    <>
    <Form>
  <FormGroup>
    <Label for="exampleEmail">
      Email
    </Label>
    <Input
      id="exampleEmail"
      name="email"
      placeholder="with a placeholder"
      type="email"
    />
  </FormGroup>
  <FormGroup>
    <Label for="examplePassword">
      Password
    </Label>
    <Input
      id="examplePassword"
      name="password"
      placeholder="password placeholder"
      type="password"
    />
  </FormGroup>
  
  
  <Button>
    Kayıt ol
  </Button>
</Form>
    </>
    );
}