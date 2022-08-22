import { useState } from "react";

interface IReturnValues{
	open:()=>void
	close:()=>void
  isOpen:boolean
  ok:()=>void 
  
}

interface IArgs{}

export const useModal = (options:IArgs):IReturnValues => {
  const [isOpen,setIsOpen] =  useState(false)
  const open = () => {
    setIsOpen(true)
  };
  const close = () => {
    setIsOpen(false)
  };
  const ok = () => {
    close()
    console.log(1)
    
  }
  return {open,close,isOpen,ok}
};
