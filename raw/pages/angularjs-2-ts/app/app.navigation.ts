import {Component} from 'angular2/core';
import {Observable, Subject} from 'rxjs/Rx';
export class Navigation {
  id: number;
  title: string;
  name: string;
  content: string;
}
const NAV_ITEMS: Navigation[] = [
  {
    id: 1,
    name: '1Sr SC judge rips into CJI-headed collegium',
    title: 'Sr SC judge rips into CJI-headed collegium',
    content: 'In a stunning revelation, the Supreme Court\'s fifth-most senior judge, Justice J Chelameswar, told The Times of India on Friday that he has stopped attending meetings of the collegium headed by the Chief Justice of India as he finds its procedure and process “most opaque“, and the "majority gangs up" to shoot down genuine objections against undesirable candidates being chosen to be judges of higher courts.<br /><br />India will be well represented at the event. Mamata Banerjee, along with a couple of her trusted aides, will be present to show her state\'s solidarity with the nun who began her ascent to saintliness on the streets of Kolkata, rescuing destitutes. And if Didi comes can CPM ­ which literally is losing ground to her after the Singur misadventure ­ be far behind in cashing just in on the gala event? <br /><br />India will be well represented at the event. Mamata Banerjee, along with a couple of her trusted aides, will be present to show her state\'s solidarity with the nun.'
  },
  {
    id: 2,
    name: 'Heavens, Everyone\'s Getting Religion',
    title: 'Heavens, Everyone\'s Getting Religion',
    content: 'The Vatican must be busy sprucing itself up, rolling out the red carpet and generally getting ready to greet with a cheery Halo, there! its long list of VVIP guests dropping in for Mother Teresa\'s canonisation ceremony.<br /><br />India will be well represented at the event. Mamata Banerjee, along with a couple of her trusted aides, will be present to show her state\'s solidarity with the nun who began her ascent to saintliness on the streets of Kolkata, rescuing destitutes. And if Didi comes can CPM ­ which literally is losing ground to her after the Singur misadventure ­ be far behind in cashing just in on the gala event?<br /><br />The BJP-led government at the Centre is sending a delegation, a move which reportedly is looked at askance by elements of the Sangh Parivar who feel that such ecumenical enthusiasm for a Christian rite might prove an unnecessary diversion from the single-minded pursuit of the Hindutva agenda.'
  },
  {
    id: 3,
    name: 'Like Mahatma Gandhi, Mother Teresa ­- soon to be Saint Teresa',
    title: 'Like Mahatma Gandhi, Mother Teresa ­- soon to be Saint Teresa',
    content: 'Of the hundreds of Catholic orders across the world, only one has an office in the Vatican itself: the Missionaries of Charity, founded by Mother Teresa in Kolkata. Of the thousands of saints recognised by the Catholic church, a formal induction ceremony, as part of the canonisation process, has been reserved for only about 800. Tomorrow, Mother Teresa will join them. She will become the 10th St Teresa, St Teresa of CalcuttaKolkata, and like the others distinguished by the city she is most identified with.<br /><br />This background is important to understand why the canonisation of Mother Teresa is a special event even within the narrow space of the Catholic church\'s conferring of sainthood on its most revered. Some have been so honoured centuries after death. Joan of Arc was murdered in the early 15th century and canonised in the early 20th century.'
  },
  {
    id: 4,
    name: 'The Parable Of PK',
    title: 'The Parable Of PK',
    content: 'Imagine you live in a colony of row houses.You have a big family with modest means.Somehow you make it work, taking everyone\'s view into account. Your family\'s young generation is trying its best to come up in life, works hard and is optimistic.<br /><br />Imagine also that your immediate neighbour is PK. PK is poorer, less educated. PK doesn\'t run his house with democracy, but rules with a stick. PK doesn\'t like to change.<br /><br />PK sees you rise and sees an even better future ahead of you. He notices you now have a couple of cars in your garage. PK doesn\'t have any. Rather than emulate you and progress, PK decides to do something else.<br /><br />Every night he comes and deflates the car tyres, smashes the glass or scratches the car bodies. PK does it at night, and disappears. He then goes home and watches TV with his set-top box, the only joy he has.'
  },
  {
    id: 5,
    name: 'Parents\' Attachment For Their Children',
    title: 'Parents\' Attachment For Their Children',
    content: 'Children are the most affected victims of attachment exhibited by their parents. Parents\' love for their children has metamorphosed into dreadful attachment. This is happening universally because of the selfish trait in parents.<br /><br />Few can claim to be free from parents\' compulsive attachment to their kids. However well-meaning they be, their attachment turns the parent-child relationship sour, traumatising families with constant confrontation followed by the invariable separation. Blissfully unaware of the consequences, parents continue to dote on their beloved ones.<br /><br />Parents\' attachment to their children manifests in two distinct ways: 1. Opulent parents pamper their children by showering upon them money and gadgets, amenities and facilities.The children are thus saturated with luxuries and lose their joy content.'
  }
];

@Component({
  selector: 'navigation',
	template: '\
    <div class="col-xs-4 navigation">\
      <ul>\
        <li *ngFor="let navItem of navItems" (click)="showPage(navItem)" >\
          {{navItem.name}}\
        </li>\
      </ul>\
    </div>\
    <div class="col-xs-8" *ngIf="selectedPage">\
      <h2 >{{selectedPage.title}}</h2>\
      <p [innerHTML]="selectedPage.content"></p>\
    </div>'
})
export class AppNavigation {
	navItems = NAV_ITEMS;
  selectedPage: Navigation;
  showPage(navItem: Navigation): void {
    this.selectedPage = navItem;
  }
}
