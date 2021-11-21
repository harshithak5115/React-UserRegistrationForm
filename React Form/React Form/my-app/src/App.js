import "./App.css";
import { Button, Container, Form, Grid, Card, Icon } from 'semantic-ui-react'
import { useSelector, useDispatch } from "react-redux";
import {reset,submit,updateForm} from './slice/formSlice'


export function App ()  {
  
    const {name,age,email,phone,submitted,errors} = useSelector((state)=>state.form);
    const dispatch = useDispatch();
    
  return (
    <Container fluid>
    <Grid columns={3} padded >
    <Grid.Column ></Grid.Column> 
    <Grid.Column verticalAlign='middle'>
    <Card>
    <Card.Content>
      <Form >
        <h2>Registration Form</h2>
        <Form.Field>
          <Form.Input 
          label='Name' 
          placeholder='Name' 
          type='text' 
          name='name' 
          key='name'
          value={name}
          error={errors['name']!==undefined}
          onChange={(event) => dispatch(updateForm({'name':event.target.value}))}
           />
           {errors['name']!==undefined &&<span font style={{color:'red', fontSize:'12px',margin:'2px'}}>{errors['name']}</span>}
        </Form.Field>
        
        <Form.Field>
            <Form.Input 
            label='Age' 
            
            placeholder='Age' 
            type='text' 
            name='age'
            key='age' 
            value={age}
            error={errors['age']!==undefined}
            onChange={(event) => dispatch(updateForm({'age':event.target.value}))}
            />
            {errors['age']!==undefined &&<span font style={{color:'red', fontSize:'12px',margin:'2px'}}>{errors['age']}</span>}
        </Form.Field>
        
        <Form.Field>
            <Form.Input 
            label='Email' 
           
            placeholder='Email' 
            type='email' 
            icon='mail' 
            name='email'
            key='email' 
            value={email}
            error={errors['email']!==undefined}
            onChange={(event) => dispatch(updateForm({'email':event.target.value}))}
             />
             {errors['email']!==undefined &&<span font style={{color:'red', fontSize:'12px',margin:'2px'}}>{errors['email']}</span>}
        </Form.Field>
        
        <Form.Field>
            <Form.Input 
            label='Phone Number' 
            
            placeholder='Phone Number' 
            type='text' 
            maxLength='10' 
            icon='phone'
            name='phone'
            key='phone'
            value={phone} 
            error={errors['phone']!==undefined}
            onChange={(event) => dispatch(updateForm({'phone':event.target.value}))}
            />
            {errors['phone']!==undefined &&<span font style={{color:'red', fontSize:'12px',margin:'2px'}}>{errors['phone']}</span>}
        </Form.Field>
        
          <div>
          <Button primary 
          onClick={(event)=> dispatch(submit())}>Submit</Button>
          <Button secondary
          onClick={(event)=>dispatch(reset())}>Reset</Button>
        </div>
  </Form>
  </Card.Content>
  </Card>
  </Grid.Column >
  <Grid.Column >
    {submitted && 
    <Container>
    <Card>
      <Card.Content>
        <Card.Header>
          <Icon name='users' />
          {name}
          </Card.Header>
        <Card.Meta>
        <Icon name='birthday cake' />
          {age}
          </Card.Meta>

        <Card.Meta>
        <Icon name='mail' />
          {email}
          </Card.Meta>
        <Card.Meta>
        <Icon name='phone' />
          {phone}
          </Card.Meta>
        
      </Card.Content>
    </Card>
    </Container>
    }
 </Grid.Column>
  </Grid>
  </Container>
  
    
  );
  }


export default App;