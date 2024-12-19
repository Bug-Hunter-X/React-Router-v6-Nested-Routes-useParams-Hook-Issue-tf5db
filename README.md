# React Router v6 Nested Routes useParams Hook Issue

This repository demonstrates a potential issue in React Router v6 when using nested routes with the `useParams` hook.  The problem arises when a parent route parameter is also accessed within a child route, potentially leading to an infinite render loop or unexpected behavior.

## Problem Description

When a parent route's parameter is accessed within a child route using `useParams`, and that parent route parameter changes, it can cause the child route to re-render unexpectedly. This re-rendering can trigger a cascading effect, leading to an infinite loop.

## Solution

The solution involves avoiding direct access to parent route parameters in the child route unless absolutely necessary.  Alternative approaches to achieve the desired functionality might include using route props or other state management techniques.  The provided solution shows a refactoring to use the parent route's parameter as a prop passed down to the child component.