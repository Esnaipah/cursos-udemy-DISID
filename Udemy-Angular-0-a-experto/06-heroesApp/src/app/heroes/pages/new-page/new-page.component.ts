import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Hero, Publisher } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, switchMap, tap } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styleUrl: './new-page.component.css'
})
export class NewPageComponent implements OnInit {

  public heroForm = new FormGroup({
    id: new FormControl(''),
    superhero: new FormControl('', { nonNullable: true }),
    publisher: new FormControl<Publisher>(Publisher.DCComics),
    alter_ego: new FormControl(''),
    first_appearance: new FormControl(''),
    characters: new FormControl(''),
    alt_img: new FormControl(''),
  })

  // el id coincide con el published del backend
  public publishers = [
    { id: 'DC Comics', desc: 'DC - Comics' },
    { id: 'Marvel Comics', desc: 'Marvel - Comics' },
  ]


  constructor(
    private heroesService: HeroesService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private snackbar: MatSnackBar,
    private dialog: MatDialog,
  ) {

  }

  get currentHero(): Hero {
    const hero = this.heroForm.value as Hero;

    return hero;

  }

  ngOnInit(): void {
    if (!this.router.url.includes('edit')) return;

    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.heroesService.getHeroById(id))
      ).subscribe(hero => {
        if (!hero) return this.router.navigateByUrl('/');

        this.heroForm.reset(hero)
        return;
      })

  }


  onSubmit(): void {

    if (this.heroForm.invalid) return;

    if (this.currentHero.id) {
      // Si existe el id se hace UPDATE

      this.heroesService.updateHero(this.currentHero)
        .subscribe(hero => {
          this.showSnackbar(`${hero.superhero} updated!`)
        });
      return;
    }

    // Si no existe el id se hace CREATE
    this.heroesService.addHero(this.currentHero)
      .subscribe(hero => {
        this.showSnackbar(`${hero.superhero} updated!`);
        this.router.navigate(['/heroes/edit', hero.id])
      })


  }

  onDeleteHero() {
    if (!this.currentHero.id) throw Error('Este héroe no existe');


    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: this.heroForm.value,
    });

    dialogRef.afterClosed()
      .pipe(
        filter(result => result),
        switchMap(()=> this.heroesService.deleteHero(this.currentHero)),
        tap( wasDeleted => console.log(wasDeleted)),
      )
      .subscribe(result =>{
        this.router.navigate(['/heroes'])

      })

  }

  showSnackbar(message: string): void {
    this.snackbar.open(message, 'Done', {
      duration: 2000
    })
  }



}
