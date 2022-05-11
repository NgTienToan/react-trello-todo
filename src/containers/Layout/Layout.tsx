import Header from './Header';
function LayoutMain({ children }: any) {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>{children}</main>
    </div>
  );
}

export default LayoutMain;