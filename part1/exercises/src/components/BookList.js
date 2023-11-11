import classes from './BookList.module.css';

export default function BookList() {
   let pageTitle = "Latest Book Releases";
   let book1 = "https://m.media-amazon.com/images/I/51dWimSLnKL._SS135_.jpg";
   let book2 = "https://m.media-amazon.com/images/I/51-9RjyQIbL._SS135_.jpg";
   let book3 = "https://m.media-amazon.com/images/I/51e8yZT4xxL._SS135_.jpg";

   return (
      <div className={classes.bookContainer}>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="Confessions of a Prep School Mommy Handler: A Memoir" />
         <img src={book2} alt="The Come Up: An Oral History of the Rise of Hip-Hop" />
         <img src={book3} alt="All These Things That I've Done: My Insane, Improbable Rock Life" />
      </div>      
   );
}