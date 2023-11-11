import classes from './ChoresList.module.css';

export default function ChoresList () {
   const chores = ["Do dishes", "Do laundry", "Feed cats", "Vaccum"];

   return (
      <div>
      <h3 className = {classes.choresHeading}>Today's chores</h3>
      <ul>
         <li className={classes.choresText}>{chores[0]}</li>
         <li className={classes.choresText}>{chores[1]}</li>
         <li className={classes.choresText}>{chores[2]}</li>
         <li className={classes.choresText}>{chores[3]}</li>
      </ul>
   </div>
   )
}
