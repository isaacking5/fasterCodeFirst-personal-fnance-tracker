import styled from "styled-components"

export const MainWrapper = styled.div`
  border-radius: 4px;
`

export const TitleWrapper = styled.h3`
  margin-top: 30px;
`

export const List = styled.div`
  padding: 0;
`

export const ListItemWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  max-width: 800px;
  margin: 20px 0px;
  padding: 10px;
  background-color: #e6f6ff;
  border: 4px solid #096f92;
  margin-bottom: 0px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`

export const ListItem = styled.div`
  display: flex;
  align-items: center;
  max-width: 800px;
  background-color: #e6f6ff;
  border-style: solid;
  border-width: 4px;
  border-color: #096f92;
  border-top: none;
  border-bottom: none;
  padding: 10px;
`

export const EachItem = styled.span`
  font-size: 14px;
  min-width: 265px;
  display: flex;
  justify-content: space-between;
`

export const Button = styled.button`
  background-color: #ff6347;
  color: #fff;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
`

export const DeleteIconWrapper = styled.div`
  margin-right: 20px;
  cursor: pointer;
`
