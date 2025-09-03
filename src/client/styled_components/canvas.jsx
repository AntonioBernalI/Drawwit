import styled from 'styled-components';
import { motion } from 'framer-motion';
export const CanvasMainContainer = styled.div`
  height: 100%;
  width:   65%;
  background-color: blue;
`
export const ToolsMainContainer = styled.div`
  height: 100%;
  width: 35%;
`
export const ToolbarContainer = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`
export const Toolbar = styled.div`
  width: 85%;
  height: 85%;
  margin-top: 10%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
`
export const ToolContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
export const Tool = styled(motion.div)`
  width: 95%;
  height: 90%;
  background-color: #af25ff;
  border-radius: 30px;
  border: 4px solid black;
  box-shadow: 4px 4px 4px 0 rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ButtonContainer = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
export const AccesibilityButton = styled(motion.div)`
  width: 90%;
  height: 30%;
  background-color: #f573ff;
  border-radius: 40px;
  border: 4px solid black;
  box-shadow: 4px 4px 4px 0 rgba(0, 0, 0, 0.2);
  text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.2);
  text-align: center;
  font-size: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const CreateContestButton = styled(motion.div)`
  margin-top: 5%;
  width: 90%;
  height: 45%;
  background-color: #fabfff;
  border-radius: 60px;
  border: 4px solid black;
  box-shadow: 4px 4px 4px 0 rgba(0, 0, 0, 0.2);
  text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.2);
  font-size: 70px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 75px;
`
