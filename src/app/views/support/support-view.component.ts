import { Component } from '@angular/core';

@Component({
  selector: 'view-support',
  templateUrl: './support-view.template.html',
  styleUrls: ['./support-view.style.scss'],
})
export class SupportView {
  tickets: any[] = [];

  ngOnInit(): void {
    for (let i = 0; i < 10; i++) {
      const ticket = {
        readableId: '#5783092',
        project: {
          producerName: 'Alberto Silva Matos',
          propertyName: 'Fazenda Rio Dourado',
        },
        createdAt: new Date(),
        subject:
          'Como aplicar o inseticida na plantação de banana sem afetar as mudas de café ao redor?',
        status: {
          label: 'Iniciado',
          color: '#574e37',
        },
        priority: {
          label: 'Urgente',
          color: '#bf1123',
        },
        tags: [
          {
            id: '1',
            label: 'plantação',
            color: '#1f6b67',
          },
          {
            id: '2',
            label: 'insumos',
            color: '#250942',
          },
          {
            id: '3',
            label: 'inseticida',
            color: '#404724',
          },
        ],
        messages: [
          {
            me: false,
            content:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id ultricies ante. Maecenas in augue sapien. Curabitur a dictum ante. Donec maximus massa id ultricies aliquam. Proin laoreet ex a tortor commodo, at sollicitudin ipsum rhoncus. Suspendisse eget hendrerit neque. Etiam nec congue sapien, et congue massa. Proin ac quam at odio tristique semper.',
            createdAt: new Date('2023-10-25T14:31:52'),
          },
          {
            me: true,
            content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id ultricies ante. Maecenas in augue sapien. Curabitur a dictum ante. Donec maximus massa id ultricies aliquam. Proin laoreet ex a tortor commodo, at sollicitudin ipsum rhoncus. Suspendisse eget hendrerit neque. Etiam nec congue sapien, et congue massa. Proin ac quam at odio tristique semper. Ut sodales, tortor at volutpat auctor, arcu nibh viverra diam, sit amet finibus magna leo et dui. Nunc ac maximus velit, a sagittis nisi. Sed vitae nunc a arcu posuere mollis. Aliquam non feugiat purus, non molestie justo. Sed sed justo arcu. Nam elementum venenatis ante nec tincidunt.
              Nunc tristique tellus a imperdiet condimentum. Aliquam ullamcorper lorem eget pellentesque accumsan. In ac tincidunt ligula, quis interdum est. Duis mollis malesuada tortor, nec lacinia dolor venenatis pharetra. Mauris urna magna, fermentum eget odio a, lacinia fringilla eros. Suspendisse et nunc vel lectus laoreet sodales. Donec id pellentesque nibh. Suspendisse cursus elit ac pretium accumsan.`,
            createdAt: new Date('2023-10-25T16:31:52'),
          },
          {
            me: false,
            content:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id ultricies ante. Maecenas in augue sapien. Curabitur a dictum ante!',
            createdAt: new Date('2023-10-26T08:11:14'),
          },
          {
            me: true,
            content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id ultricies ante. Maecenas in augue sapien. Curabitur a dictum ante. Donec maximus massa id ultricies aliquam. Proin laoreet ex a tortor commodo, at sollicitudin ipsum rhoncus. Suspendisse eget hendrerit neque. Etiam nec congue sapien, et congue massa. Proin ac quam at odio tristique semper. Ut sodales, tortor at volutpat auctor, arcu nibh viverra diam, sit amet finibus magna leo et dui. Nunc ac maximus velit, a sagittis nisi. Sed vitae nunc a arcu posuere mollis. Aliquam non feugiat purus, non molestie justo. Sed sed justo arcu. Nam elementum venenatis ante nec tincidunt.
              Nunc tristique tellus a imperdiet condimentum. Aliquam ullamcorper lorem eget pellentesque accumsan. In ac tincidunt ligula, quis interdum est. Duis mollis malesuada tortor, nec lacinia dolor venenatis pharetra. Mauris urna magna, fermentum eget odio a, lacinia fringilla eros. Suspendisse et nunc vel lectus laoreet sodales. Donec id pellentesque nibh. Suspendisse cursus elit ac pretium accumsan.`,
            createdAt: new Date('2023-10-25T16:31:52'),
          },
          {
            me: false,
            content:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id ultricies ante. Maecenas in augue sapien. Curabitur a dictum ante!',
            createdAt: new Date('2023-10-26T08:11:14'),
          },
        ],
      };
      this.tickets = [...this.tickets, ticket];
    }
  }
}
