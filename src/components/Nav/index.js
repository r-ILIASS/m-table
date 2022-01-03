import React, { useState } from "react";
import { NavLink } from "react-router-dom";

// Styles
import { Wrapper, Content } from "./Nav.styles";

const Nav = () => (
  <Wrapper>
    <Content>
      <NavLink to="/">
        <span>
          <svg
            className="active"
            width="20"
            height="15"
            viewBox="0 0 20 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.0625 0H18.75V0.78125C18.75 1.03906 18.5391 1.25 18.2812 1.25H16.7188C16.4609 1.25 16.25 1.03906 16.25 0.78125V0H3.75V0.78125C3.75 1.03906 3.53906 1.25 3.28125 1.25H1.71875C1.46094 1.25 1.25 1.03906 1.25 0.78125V0H0.9375C0.417969 0 0 0.417969 0 0.9375V14.0625C0 14.582 0.417969 15 0.9375 15H1.25V14.2188C1.25 13.9609 1.46094 13.75 1.71875 13.75H3.28125C3.53906 13.75 3.75 13.9609 3.75 14.2188V15H16.25V14.2188C16.25 13.9609 16.4609 13.75 16.7188 13.75H18.2812C18.5391 13.75 18.75 13.9609 18.75 14.2188V15H19.0625C19.582 15 20 14.582 20 14.0625V0.9375C20 0.417969 19.582 0 19.0625 0ZM3.75 12.0312C3.75 12.2891 3.53906 12.5 3.28125 12.5H1.71875C1.46094 12.5 1.25 12.2891 1.25 12.0312V10.4688C1.25 10.2109 1.46094 10 1.71875 10H3.28125C3.53906 10 3.75 10.2109 3.75 10.4688V12.0312ZM3.75 8.28125C3.75 8.53906 3.53906 8.75 3.28125 8.75H1.71875C1.46094 8.75 1.25 8.53906 1.25 8.28125V6.71875C1.25 6.46094 1.46094 6.25 1.71875 6.25H3.28125C3.53906 6.25 3.75 6.46094 3.75 6.71875V8.28125ZM3.75 4.53125C3.75 4.78906 3.53906 5 3.28125 5H1.71875C1.46094 5 1.25 4.78906 1.25 4.53125V2.96875C1.25 2.71094 1.46094 2.5 1.71875 2.5H3.28125C3.53906 2.5 3.75 2.71094 3.75 2.96875V4.53125ZM14.6875 12.6562C14.6875 12.9141 14.4766 13.125 14.2188 13.125H5.78125C5.52344 13.125 5.3125 12.9141 5.3125 12.6562V2.34375C5.3125 2.08594 5.52344 1.875 5.78125 1.875H14.2188C14.4766 1.875 14.6875 2.08594 14.6875 2.34375V12.6562ZM18.75 12.0312C18.75 12.2891 18.5391 12.5 18.2812 12.5H16.7188C16.4609 12.5 16.25 12.2891 16.25 12.0312V10.4688C16.25 10.2109 16.4609 10 16.7188 10H18.2812C18.5391 10 18.75 10.2109 18.75 10.4688V12.0312ZM18.75 8.28125C18.75 8.53906 18.5391 8.75 18.2812 8.75H16.7188C16.4609 8.75 16.25 8.53906 16.25 8.28125V6.71875C16.25 6.46094 16.4609 6.25 16.7188 6.25H18.2812C18.5391 6.25 18.75 6.46094 18.75 6.71875V8.28125ZM18.75 4.53125C18.75 4.78906 18.5391 5 18.2812 5H16.7188C16.4609 5 16.25 4.78906 16.25 4.53125V2.96875C16.25 2.71094 16.4609 2.5 16.7188 2.5H18.2812C18.5391 2.5 18.75 2.71094 18.75 2.96875V4.53125Z"
              fill="currentColor"
            />
          </svg>
        </span>
        Movies
      </NavLink>
      <NavLink to="/customers">
        <span>
          <svg
            width="22"
            height="15"
            viewBox="0 0 22 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.0714 7.5C17.846 7.5 19.2857 6.06027 19.2857 4.28571C19.2857 2.51116 17.846 1.07143 16.0714 1.07143C14.2969 1.07143 12.8571 2.51116 12.8571 4.28571C12.8571 6.06027 14.2969 7.5 16.0714 7.5ZM16.0714 2.67857C16.9587 2.67857 17.6786 3.39844 17.6786 4.28571C17.6786 5.17299 16.9587 5.89286 16.0714 5.89286C15.1842 5.89286 14.4643 5.17299 14.4643 4.28571C14.4643 3.39844 15.1842 2.67857 16.0714 2.67857ZM9.11049 8.16964C8.71205 8.16964 8.31027 8.22656 7.92188 8.3471C7.44643 8.49107 6.94754 8.57143 6.42522 8.57143C5.9029 8.57143 5.40402 8.49107 4.92857 8.3471C4.54018 8.22991 4.13839 8.16964 3.73996 8.16964C2.52455 8.16964 1.34263 8.71205 0.649554 9.73995C0.241071 10.356 0 11.096 0 11.8929V13.3929C0 14.2801 0.719866 15 1.60714 15H11.25C12.1373 15 12.8571 14.2801 12.8571 13.3929V11.8929C12.8571 11.096 12.6161 10.356 12.2009 9.73995C11.5078 8.71205 10.3259 8.16964 9.11049 8.16964ZM11.25 13.3929H1.60714V11.8929C1.60714 10.9252 2.22321 10.0982 3.08371 9.78013C3.42857 9.6529 3.80692 9.65625 4.15179 9.78013C4.89174 10.0446 5.65848 10.1786 6.42857 10.1786C7.19866 10.1786 7.96205 10.0446 8.7087 9.78013C9.05357 9.65625 9.43192 9.6529 9.77679 9.78013C10.6373 10.0949 11.2533 10.9252 11.2533 11.8929V13.3929H11.25ZM6.42857 7.5C8.50112 7.5 10.1786 5.82254 10.1786 3.75C10.1786 1.67746 8.50112 0 6.42857 0C4.35603 0 2.67857 1.67746 2.67857 3.75C2.67857 5.82254 4.35603 7.5 6.42857 7.5ZM6.42857 1.60714C7.61049 1.60714 8.57143 2.56808 8.57143 3.75C8.57143 4.93192 7.61049 5.89286 6.42857 5.89286C5.24665 5.89286 4.28571 4.93192 4.28571 3.75C4.28571 2.56808 5.24665 1.60714 6.42857 1.60714ZM20.8828 9.54576C20.3036 8.68862 19.3192 8.23661 18.308 8.23661C17.3772 8.23661 17.1429 8.57143 16.0714 8.57143C15 8.57143 14.7656 8.23661 13.8348 8.23661C13.3895 8.23661 12.9576 8.33705 12.5558 8.50781C12.75 8.70536 12.9342 8.9096 13.0915 9.14062C13.2489 9.375 13.3795 9.62277 13.4933 9.87723C13.6038 9.85379 13.7176 9.8404 13.8348 9.8404C14.4107 9.8404 14.8259 10.1752 16.0714 10.1752C17.3237 10.1752 17.7288 9.8404 18.308 9.8404C18.8337 9.8404 19.2958 10.0647 19.5502 10.4397C19.7277 10.7042 19.8214 11.0123 19.8214 11.3337V12.3214H13.9286V13.3929C13.9286 13.577 13.9085 13.7545 13.875 13.9286H20.0893C20.8292 13.9286 21.4286 13.3292 21.4286 12.5893V11.3404C21.4286 10.6741 21.2277 10.058 20.8828 9.54576Z"
              fill="currentColor"
            />
          </svg>
        </span>
        Customers
      </NavLink>
      <NavLink to="/rentals">
        <span>
          <svg
            width="14"
            height="15"
            viewBox="0 0 14 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.0781 7.03125H3.04688C2.91797 7.03125 2.8125 7.13672 2.8125 7.26562V7.73438C2.8125 7.86328 2.91797 7.96875 3.04688 7.96875H10.0781C10.207 7.96875 10.3125 7.86328 10.3125 7.73438V7.26562C10.3125 7.13672 10.207 7.03125 10.0781 7.03125ZM10.0781 9.84375H3.04688C2.91797 9.84375 2.8125 9.94922 2.8125 10.0781V10.5469C2.8125 10.6758 2.91797 10.7812 3.04688 10.7812H10.0781C10.207 10.7812 10.3125 10.6758 10.3125 10.5469V10.0781C10.3125 9.94922 10.207 9.84375 10.0781 9.84375ZM12.249 0C12.0791 0 11.9033 0.0527344 11.7422 0.166992L10.4678 1.08398L9.33691 0.269531C9.09082 0.09375 8.80371 0.00292969 8.51367 0.00292969C8.22656 0.00292969 7.93945 0.0908203 7.69336 0.269531L6.5625 1.08398L5.43164 0.269531C5.18555 0.09375 4.89551 0.00292969 4.6084 0.00292969C4.32129 0.00292969 4.03418 0.0908203 3.78809 0.269531L2.65723 1.08398L1.38281 0.166992C1.22461 0.0527344 1.04883 0 0.875977 0C0.421875 0.00292969 0 0.360352 0 0.875977V14.127C0 14.6338 0.418945 15 0.875977 15C1.0459 15 1.22168 14.9473 1.38281 14.833L2.65723 13.916L3.78809 14.7305C4.03418 14.9062 4.32129 14.9971 4.61133 14.9971C4.89844 14.9971 5.18555 14.9092 5.43164 14.7305L6.5625 13.916L7.69336 14.7305C7.93945 14.9062 8.22949 14.9971 8.5166 14.9971C8.80371 14.9971 9.09082 14.9092 9.33691 14.7305L10.4678 13.916L11.7422 14.833C11.9004 14.9473 12.0762 15 12.249 15C12.7031 15 13.1221 14.6426 13.1221 14.127V0.875977C13.125 0.366211 12.7061 0 12.249 0ZM12.1875 13.998L11.0156 13.1543L10.4678 12.7588L9.91992 13.1543L8.78906 13.9688C8.70703 14.0273 8.61328 14.0566 8.5166 14.0566C8.41699 14.0566 8.32324 14.0244 8.24121 13.9658L7.11035 13.1543L6.5625 12.7588L6.01465 13.1543L4.88379 13.9688C4.80176 14.0273 4.70801 14.0566 4.6084 14.0566C4.50879 14.0566 4.41504 14.0244 4.33301 13.9658L3.20215 13.1543L2.6543 12.7588L2.10938 13.1543L0.9375 14.0156V1.00195L2.10938 1.8457L2.65723 2.24121L3.20508 1.8457L4.33594 1.03125C4.41797 0.972656 4.51172 0.943359 4.6084 0.943359C4.70801 0.943359 4.80176 0.975586 4.88379 1.03418L6.01465 1.8457L6.5625 2.24121L7.11035 1.8457L8.24121 1.03125C8.32324 0.972656 8.41699 0.943359 8.5166 0.943359C8.61621 0.943359 8.70996 0.975586 8.79199 1.03418L9.92285 1.8457L10.4707 2.24121L11.0156 1.8457L12.1875 1.00195V13.998ZM10.0781 4.21875H3.04688C2.91797 4.21875 2.8125 4.32422 2.8125 4.45312V4.92188C2.8125 5.05078 2.91797 5.15625 3.04688 5.15625H10.0781C10.207 5.15625 10.3125 5.05078 10.3125 4.92188V4.45312C10.3125 4.32422 10.207 4.21875 10.0781 4.21875Z"
              fill="currentColor"
            />
          </svg>
        </span>
        Rentals
      </NavLink>
    </Content>
  </Wrapper>
);

export default Nav;
