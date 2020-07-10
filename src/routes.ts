import { response } from "express"

import { Request, Response } from 'express';
import createUser from './services/CreateUSer';

export function helloWorld(requeste: Request, response: Response) {
  const user = createUser({
    email: 'diogomartins200214@gmail.com',
    password: '123',
    techs: [
      'NodeJS', 
      'ReactJS', 
      'React Native',
      { title: 'Javascript', experience: 100 },
    ],
  });

  console.log(user.email);

  return response.json({ message: 'Hello World'});
}