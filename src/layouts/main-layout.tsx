import './main-layout.css!';
import * as React from 'react';
import { LayoutTopNav, LayoutTopNavLink } from './components/layout-top-nav';
import { LayoutHeader } from './components/layout-header';
import { LayoutMain } from './components/layout-main';
import { LayoutFooter } from './components/layout-footer';
import { MyComponent } from "../custom/my-component";

export class MainLayout extends React.Component<{}, {}> {
  render() {
    const {children} = this.props;

    return (
      <div className="c-text">
        <LayoutHeader>
          <LayoutTopNav>
            <LayoutTopNavLink href="/" isPrimary> Home </LayoutTopNavLink>
            <LayoutTopNavLink href="/currency-converter"> Currency Converter </LayoutTopNavLink>
            <LayoutTopNavLink href="/css-modules"> CSS Modules </LayoutTopNavLink>
          </LayoutTopNav>
        </LayoutHeader>

        <LayoutMain>
          <MyComponent title="My First" input={256} doubleToggle={true}>
            <span className='content-child-b'>I<strong>NN</strong>ER</span>
            <div className='content-child-a'>Other child</div>
          </MyComponent>
          {children}
        </LayoutMain>

        <LayoutFooter>
          2016 &copy; Piotr Witek<br />
          <a href="https://github.com/piotrwitek/react-redux-typescript-starter-kit">Back to GitHub Repo</a>
        </LayoutFooter>
      </div>
    );
  };
};
