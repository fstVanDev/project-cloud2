import React from 'react'
import styled from 'styled-components'

export interface InputProps {
   endAdornment?: React.ReactNode
   onChange: (e: React.FormEvent<HTMLInputElement>) => void
   placeholder?: string
   startAdornment?: React.ReactNode
   value: string
}


const Input: React.FC<InputProps> = ({ startAdornment, endAdornment, onChange, value, placeholder }) => {
   return (
      <StyledInputWrapper>
         {!!startAdornment && startAdornment}
         <StyledInput placeholder={placeholder} value={value} onChange={onChange} />
         {!!endAdornment && endAdornment}
      </StyledInputWrapper>
   )
}

export default Input



const StyledInputWrapper = styled.div`
  align-items: center;
  background-color: white;
  border: solid 2px;
  border-radius: 10px;
  border-color: #4A5A72;
  display: flex;
  height: 72px;
  padding: 12px;
`

const StyledInput = styled.input`
  width: 100%;
  background: none;
  border: 0;
  color: black;
  font-size: 18px;
  flex: 1;
  height: 56px;
  margin: 0;
  padding: 0;
  outline: none;
`