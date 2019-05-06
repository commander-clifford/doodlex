// import {trigger, animate, style, group, animateChild, query, stagger, transition} from '@angular/animations';
import {sequence, trigger, stagger, animate, style, group, query as q, transition, keyframes, animateChild} from '@angular/animations';
const query = (s,a,o={optional:true})=>q(s,a,o);

export const durationNum = 800;
export const duration = durationNum+'ms ';
export const mockDelayNum = 2000;
export const mockDelay = mockDelayNum+'ms ';

export const routerTransition = trigger('routerTransition', [

  transition('search => gmail', [

    group([
      query(':leave .fade-in', style({ opacity: 0 }),{ optional: true }),
      query(':enter, :leave', style({ position: 'fixed', width:'100%' }), { optional: true }),
    ]),

    group([

      query(':leave', [
        style({
          opacity: 1,
          transform: 'translateY(0px) scale(1)',
        }),
        animate('400ms 0ms cubic-bezier(.5,0,1,1)',
          style({
            opacity: 0,
            transform: 'translateY(40px) scale(0.9)',
          })
        )],
        { optional: true }
      ),

      query(':enter', [
        style({ opacity: 0 }),
        animate('400ms 0ms cubic-bezier(0,0,.5,1)',
          style({
            opacity: 1,

          }
        )
      )], { optional: true }),

    ])

  ]),

  transition('gmail => ginbox', [

    group([
      query(':enter, :leave', style({ position: 'fixed', width:'100%' }),{ optional: true }),
    ]),

    group([

      query(':leave', [
        style({
          transform: 'translateY(0) scale(1)',
          opacity: 1,
        }),
        animate('400ms 0ms cubic-bezier(.5,-0.25,1,.5)',
          style({
            transform: 'translateY(100px) scale(2)',
            opacity: 0
          })
        )
      ], { optional: true }),



      query(':enter', [
        style({
          opacity: 0,
          transform: 'translateY(0px) scale(0.99)',
         }),
        animate('400ms 0ms cubic-bezier(0,0,.5,1)',
          style({
            opacity: 1,
            transform: 'translateY(0px) scale(1)',
          })
        )
      ], { optional: true }),




    ]),





    query(':enter', [
      style({ position: 'static' }),
    ], { optional: true }),

    query(':enter .fade-in', stagger(200, [
      animate(duration+'cubic-bezier(0,0,.5,1)',
        style({
          opacity: 1,
        })),
    ]), { optional: true }),

  ]),

  transition('search => results', [

    group([
      query(':enter', style({ opacity: 0, transform: 'scale(0.8)'}), { optional: true }),
      query(':leave .fade-in', style({ opacity: 0 }),{ optional: true }),
      query(':enter, :leave', style({ position: 'fixed', width:'100%' }), { optional: true }),
      query(':enter .stagger-in', style({ opacity: 0, transform: 'translateY(40px) scale(0.9)' }),{ optional: true }),
      query(':leave .stagger-out', style({ opacity: 1, transform: 'translateY(0px) scale(1)' }),{ optional: true }),

    ]),

    group([

      query(':leave', [
        style({ opacity: 1 }),
          animate(duration+' cubic-bezier(.5,0,1,1)',
            style({
              opacity: 0
            })
          )],
        { optional: true }
      ),

      query(':leave .stagger-out',
        stagger('40ms', [
          animate('400ms cubic-bezier(.5,-0.5,1,.5)',
            style({
              transform: 'translateY(-200px) scale(1.05)',
              opacity: 0,
            })
          )
        ]),
        { optional: true }
      ),

      query(':enter', [
        style({
          transform: 'translateY(40vh)',
          opacity: 0,

        }),
        animate('400ms 400ms cubic-bezier(0,0,.5,1)',
          style({
            transform: 'translateY(0%)',
            opacity: 1,

          }
        )
      )], { optional: true }),

      query(':enter .stagger-in',
        stagger(100, [
          animate('400ms 400ms cubic-bezier(0,0,.5,1)',
            style({
              transform: 'translateY(0px) scale(1)',
              opacity: 1,
            })
          )
        ]),
        { optional: true }
      ),

    ])

  ]),

  transition('results => search', [

    group([
      query(':enter, :leave', style({ position: 'fixed', width:'100%' }),{ optional: true }),
      query(':enter', style({ opacity: 0 }),{ optional: true }),
      query(':enter .stagger-out', style({ opacity: 0, transform: 'translateY(-200px) scale(1.05)' }),{ optional: true }),
      query(':enter .fade-in', style({ opacity: 0 }),{ optional: true }),
      query(':enter .main', style({ position: 'absolute', width: '100%', transform: 'translateY(-50%)' }),{ optional: true }),
      query(':leave .stagger-in', style({ transform: 'translateY(0) scale(1)' }),{ optional: true }),
    ]),

    group([

      query(':leave', [
        style({
          transform: 'translateY(0%)',
          opacity: 1,
        }),
        animate('400ms 0ms ease-in', style({
          transform: 'translateY(40vh)',
          opacity: 0
        }))
      ], { optional: true }),

      query(':leave .stagger-in',
        stagger('-100ms', [
          animate('600ms ease-in',
            style({
              transform: 'translateY(80px) scale(0.9)',
            })
          )
        ]),
        { optional: true }
      ),

      query(':enter', [
        style({ opacity: 0 }),
        animate(duration+' 200ms cubic-bezier(0,0,.5,1)',
          style({ opacity: 1 })
        )
      ], { optional: true }),

      query(':enter .main', [
        style({}),
        animate(duration+' 200ms cubic-bezier(0,0.5,0.5,1.5)', // http://cubic-bezier.com/#0,0.5,0.5,1.5
          style({ transform: 'translateY(0%)' })
        )
      ], { optional: true }),

      query(':enter .stagger-out', stagger('-100ms', [
        animate('500ms 200ms cubic-bezier(0,0,.5,1)',
          style({
            transform: 'translateY(0px) scale(1)',
            opacity: 1,
          })),
        ]), { optional: true }),

    ]),





    query(':enter', [
      style({ position: 'static' }),
    ], { optional: true }),

    query(':enter .fade-in', stagger(200, [
      animate(duration+'cubic-bezier(0,0,.5,1)',
        style({
          opacity: 1,
        })),
    ]), { optional: true }),

  ]),



  // transition('* => search', [
  //
  //   group([
  //     query(':enter, :leave', style({ position: 'fixed', width:'100%' }),{ optional: true }),
  //     query(':enter', style({ opacity: 0 }),{ optional: true }),
  //     query(':enter .stagger-in', style({
  //       opacity: 0,
  //       transform: 'translateY(100px) scale(0.9)'
  //     }),{ optional: true }),
  //     query(':enter .fade-in', style({ opacity: 0 }),{ optional: true }),
  //     query(':enter .main', style({ position: 'absolute', width: '100%', transform: 'translateY(50%)' }),{ optional: true }),
  //   ]),
  //
  //   group([
  //
  //     query(':enter', [
  //       style({ opacity: 0 }),
  //       animate(duration+'cubic-bezier(0,0,.5,1)',
  //         style({ opacity: 1 })
  //       )
  //     ], { optional: true }),
  //
  //     query(':enter .main', [
  //       style({}),
  //       animate(duration+mockDelay+'cubic-bezier(0.25,-0.6,0.6,1.6)',
  //         style({ transform: 'translateY(0%)' })
  //       )
  //     ], { optional: true }),
  //
  //     query(':enter .stagger-in', stagger(100, [
  //       animate('400ms '+(mockDelayNum+300)+'ms cubic-bezier(0,0,.5,1)',
  //         style({
  //           transform: 'translateY(0px) scale(1)',
  //           opacity: 1,
  //         })),
  //       ]), { optional: true }),
  //
  //   ]),
  //
  //   query(':enter', [
  //     style({ position: 'static' }),
  //   ], { optional: true }),
  //
  //   query(':enter .fade-in', stagger(200, [
  //     animate(duration+' cubic-bezier(0,0,.5,1)',
  //       style({
  //         opacity: 1,
  //       })),
  //   ]), { optional: true }),
  //
  // ]),

  // transition('* <=> *', [
  //
  //   query(':enter, :leave', style({ position: 'absolute', 'min-height':'100vh' })),
  //
  //   group([
  //     query(':leave', [
  //       style({ opacity: 1, transform: 'scale(1) translateY(0px)',}),
  //       animate('400ms ease-in-out',
  //         style({ opacity: 0, transform: 'scale(1) translateY(40px)',}))
  //     ]),
  //
  //     query(':enter', [
  //       style({ opacity: 0, transform: 'scale(1) translateY(-40px)',}),
  //       animate('400ms ease-in-out',
  //         style({ opacity: 1, transform: 'scale(1) translateY(0px)',})),
  //     ]),
  //   ]),
  //
  // ]),







  transition('result <=> result', [

    query(':enter, :leave', style({ position: 'absolute', 'min-height':'100vh' })),

    group([

      query(':leave', [
        style({ opacity: 1, transform: 'scale(1) translateY(0px)',}),
        animate('400ms ease-in-out',
          style({ opacity: 0, transform: 'scale(1) translateY(40px)',}))
      ]),

      query(':enter', [
        style({ opacity: 0, transform: 'scale(1) translateY(-40px)',}),
        animate('400ms ease-in-out',
          style({ opacity: 1, transform: 'scale(1) translateY(0px)',})),
      ]),

    ]),

  ]),

















])
