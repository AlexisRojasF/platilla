import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumds',
  templateUrl: './breadcrumds.component.html',
  styles: [],
})
export class BreadcrumdsComponent implements OnInit, OnDestroy {
  titulo: string = '';
  tituloSubs!: Subscription;

  constructor(private router: Router) {
    this.tituloSubs = this.getTitulo().subscribe(({ titulo }) => {
      this.titulo = titulo;
      document.title = `AdminPro-${titulo}`;
    });
  }
  ngOnDestroy(): void {
    this.tituloSubs.unsubscribe();
  }

  getTitulo() {
    return this.router.events.pipe(
      filter((event): event is ActivationEnd => event instanceof ActivationEnd),
      filter((event: ActivationEnd) => event.snapshot.firstChild === null),
      map((event: ActivationEnd) => event.snapshot.data)
    );
  }

  ngOnInit(): void {}
}
