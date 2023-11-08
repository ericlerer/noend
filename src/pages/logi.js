import styled from "styled-components";

const LoginDiv = styled.div`

.logologo{
        position:fixed ;
        bottom: 0%;
        right: 0%;
        height: 120px;
    }

    .Chad-body {
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #fff;
       }
       
       .Container {
        width: 100%;
        height: 90vh;
        display: flex;
        box-shadow: 5px 5px 10 rgba(0, 0, 0, 212);
        
       }

       .Chad-image {
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #3191F5;
        padding: 1rem;
        height: 91.8vh;
       }

       .Chad-image img {
        width: 31rem;
       }

       .Chad {
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background-color: #fff;
        padding: 3rem;
       }

       

       .Chad-title h1::after {
        content: '';
        display: block;
        width: 5rem;
        height: 0.3rem;
        background-color: #6c63ff;
        margin: 0 auto;
        position: absolute;
        border-radius: 10px;
       }

       .Send-button button {
        width: 100%;
        margin-top: 1.5rem;
        margin-bottom: 2.5rem;
        border: none;
        background-color: #214BDE;
        padding: 0.62rem;
        border-radius: 5px;
        cursor: pointer;
        align-items: center;
       }

       .Send-button button:hover {
        background-color: #3191F5;
       }

       .Send-button a {
        text-decoration: none;
        font-weight: 500;
        color: #fff;
        align-items: flex-end;
       }

      .Input-group {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        padding: 1rem 0;
        flex-direction: column;
      }

      .Input-box {
        display: flex;
        flex-direction: column;
        margin-bottom: 1.1rem;
      }

      .Input-box input {
        margin: 0.6rem 0;
        padding: 0.8rem 1.2rem;
        border: none;
        border-radius: 10px;
        box-shadow: 1px 1px 6px #0000001c;
      }

      .Input-box input:hover {
        background-color: #eeeeee75;
      }

      .Input-box input:focus-visible {
        outline: 1px solid #6c63ff;
      }

      #esqueceu_senha{
        text-decoration: none;
        color: gray;
      }

      

       @media screen and (max-width: 1330) {
        .Chad-image {
            display: none;
        }

        .Container {
            width: 50%;
        }

        .Chad {
            width: 100%;
        }
       }
       
       @media screen and (max-width:1064) {
            .Container {
                width: 90%;
                height: auto;
            }

            .Input-group {
                flex-direction: column;
                overflow-y: scroll;
                flex-wrap: nowrap;
                max-height: 10rem;
                padding-right: 5rem;
            }

       }
`;

export {LoginDiv};