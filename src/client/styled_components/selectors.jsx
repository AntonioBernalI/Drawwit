import styled from 'styled-components';
import { motion } from 'framer-motion';

export const MainContainer = styled(motion.div)`
  width: 100%;
  height: 80%;
  background-color: white;
  border-radius: 30px;
  border: 4px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center; 
  align-items: center;
  margin-top: 25%;
`

export const TitleContainer = styled.div`
  width: 100%;
  height: 19%;
  background-color: red;
  border: 4px solid blue;
`
export const Snippet = styled.div`
  width: 100%;
  height: 27%;
  background-color: lightgray;
  border: 4px solid blue;
`
