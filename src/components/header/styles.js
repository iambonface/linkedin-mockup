import styled from "styled-components";
const StyledHeader = styled.div`
  .bar {
    display: flex;
    background-color: #283e4a;
    color: #ffffff;
    align-items: center;
    padding-left: 68px;
    padding-right: 68px;
    height: 55px;
  }
  .logo {
    padding: 5px 10px;
  }
  .app-logo {
    width: 34px;
    height: 34px;
  }
  .input-search {
    padding: 6px;
    font-size: 14px;
    border: none;
    border-radius: 3px;
    background-color: rgb(225, 233, 238);
    padding: 8px;
    width: 230px;
    margin: 2px;
  }
  .nav {
    margin-left: auto;
    font-size: 12px;
    ul {
      display: flex;
      list-style: none;
    }
    a {
      display: inline-block;
      color: #cdd0d0;
      margin: 2px;
      text-decoration: none;
    }

    .fa {
      color: #cdd0d0;
    }
    span {
      display: block;
    }
    li {
      text-align: center;
      padding: 5px 10px;
    }
    li:last-child {
      border-right: 1px solid rgb(92, 111, 124);
      padding-right: 40px;
    }
  }
  .actions {
    font-size: 12px;
    ul {
      display: flex;
      list-style: none;
    }
    span {
      display: block;
    }
    li {
      text-align: center;
      padding: 5px 10px;
      color: #cdd0d0;
    }
    a {
      text-decoration: none;
      color: #cdd0d0;
    }
  }
  .avator {
    border-width: 1px solid rgb(199, 209, 216);
    border-radius: 50%;
    height: 24px;
    width: 24px;
    cursor: pointer;
  }
  .home {
    .badge-home {
      position: absolute;
      color: #ffffff;
      margin-left: 18px;
      background-color: rgb(209, 17, 36);
      border-radius: 50%;
      font-size: 14px;
      width: 14px;
      height: 14px;
      border: 2px solid rgb(40, 62, 74);
    }
    .lens {
      font-size: 4px;
      padding: 5px;
    }
    .icon-home {
      font-size: 26px;
    }
  }
  .my-network {
    .icon-people {
      font-size: 26px;
    }
  }

  .jobs {
    .icon-jobs {
      font-size: 26px;
      color: #cdd0d0;
    }
  }

  .messaging {
    .icon-comment {
      font-size: 26px;
      color: #cdd0d0;
    }
  }
  .notifications {
    .icon-notifications {
      font-size: 26px;
      color: #cdd0d0;
    }
  }

  .apps {
    .icon-apps {
      font-size: 26px;
      color: #cdd0d0;
    }
  }

  .learning {
    .icon-ondemandvideo {
      font-size: 26px;
      color: #cdd0d0;
    }
  }
`;

export default StyledHeader;
