var GAME_LEVELS = [
  ["                                                                                                                       ",
   "                                                                                                                       ",
   "                                                                                                                       ",
   "                                                                                                                       ",
   "                                                                                                                       ",
   "                                      x   k     oooooooooooo          x                                                ",
   "                                      xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx                                                ",
   "            x oooo           k x                                                                                       ",
   "            xxxxxxx!!!!!!xxxxxxx                                                                                       ",
   "            xxxxxxxxxvxxxxxxxxxx                                       x oooo          k  x                           x",
   "                                   xooo   k x                          xxxxxxxx!!!!!xxxxxxx                           x",
   "                                   xxxxxxxxxx                          xxxxxxxxxxxxxxxxxxxx                           x",
   "                                                                                                                      x",
   "                                                x   k  x                                              oooo            x",
   "  xx                    ooooo            y      xxxxxxxx                                  x!!!|!|!!xxxxxxxxxx         x",
   "  x                                                                                       xxxxxxxxxxxxxxxxxxx         x",
   "  x                  xxxxxxxxxx                                                                                       x",
   "  x                                    xxxxx                                                                          x",
   "  x  @                      oooooo   xxxxxxx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!xxxxxxxx                                 x",
   "  xxxxxxxxxxxxxxxx!||!!!xxxxxxxxxxxxxxxxxxxx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!xxxxxxxx!!!!!!!!!!!!!!!!!!!!!!!xxxxxxxxxxx",
   "                xx!!!!!!xx                xx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!xx     x!!!!!!!!!!!!!!!!!!!!!!!xxxxxxxxxxx",
   "                xx!!!!!!xx                xx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!xx     xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "                xx!!!!!!xx                 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx                                        ",
   "                 xxxxxxxx                                                                                              ",
   "                                                                                                                       ",
   "                                                                                                                       "],
  ["                                                                                                                                                  ",
   "                                                                                                                                                  ",
   "                                                                                                                                                  ",
   "                                                                                                                                                  ",
   "               ooooooo                 o              oooooo                                                                                      ",
   "                                                                                                                                                  ",
   "         xxxxxxxxx    xxxxxxxx!|!!|!xxxx!|!!xx!|!xxxxx    xxxx                                                                                    ",
   "                  ssss       xxxxxxxxx  xxxxxxxxxxx   ssss            oo                             oooooo                                       ",
   "oo                                                                  x   k              x          x  k       x                                    ",
   "xxxx                                                                xxxxxxxx!!!!xxxxxxxx          xxxxxxxxxxxx                                    ",
   "                                                                           xxxxxx                                        ooooo                    ",
   "                                                                                                                                                  ",
   "!!!!!!xxxxxxx       ooooooo                                                                                   x!!!!!xxxxxxxxxxxx                  ",
   "xxxxxxx                                                x!!!!!!!!!!!!!!!!x                                     xxvxxxx           ssss        ooooo ",
   "                 xxxxxx   xxx                          xxxxxxxvxxxvxxxxxx                                                                x     k x",
   " ooooooo               sss                                                                                                               xxxxxxxxx",
   "xxxxxxxxxxxxxx     oo                                                                                                                             ",
   "x                                                                                                                                                 ",
   "x                xxxxxxxx                      o                                                                           oooo                   ",
   "x                             x               k   x        oo   o   o                                                                             ",
   "x                             xxxxxxx!!!!!xxxxxxxxx                                                                   xxxxxxsssxxxxxx!!!!!!!!!!!!!",
   "x                                  xxxxxxx               x     k     x                                                              xxxxxxxxxxxxxx",
   "x                                                        xxxxxxxxxxxxx                                     oooooooo                               ",
   "x                                       oooooooooo                                                   x   k              x                        x",
   "x                                                                                                    xxxxxxxxxxxxxxxxxxxx                        x",
   "x                oooo        xxxxxxxxxxxxxxxxxxxxxxxxxxx                                                                                         x",
   "x                                                                                                                               oooooo           x",
   "x             xxxxxxxxxxx                                                                                                                        x",
   "x  @                                                                                                                                             x",
   "xxxxxxxx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!xxxxxxxxxxxxxxxxxxxxxxxxx"],
  ["                          x                                                                                   ",
   "                          x                                                                                   ",
   "      oooo                x                                                                                   ",
   "  @                       x                                                                                   ",
   "xxxxxxxxxxxxxx            x              x    k     k    k   x                                                ",
   "                          x              xxxxxxxxxxxxxxxxxxxxx                  oooooooo                      ",
   "                          x                           x                                                       ",
   "                 o        x   k     x                 x           x     k      x         x    k  x            ",
   "                  oo      xxxxxxxxxxx                 x           xxxxxxxxxxxxx!!|!!!|!!xxxxxxxxxx            ",
   "                   ooooo  x                           x                       xxxxxxxxxxx                     ",
   "                          x           oooooo          x                                                       ",
   "            x       k     x        xxxxxxxxxxxx       x                      ooo                  oooooo      ",
   "            xxxxxxxxxxxxxxx                           x                  x                           k        ",
   "                          x  k   x                    x                  xxxxxxxxx!!!|!!!!|!!xxxxxxxxxxxxxxxxx",
   "                          xxxxxxxx                    x                          xxxxxxxxxxxxx                ",
   "                          x                           x                                                       ",
   "                          x                           x  oooooooo                                             ",
   "                          x    x    k   x             xxxxxxxxxxxxxx!!!||!!!xxxxxx                            ",
   "  ooooo                   x    xxxxxxxxxx       ooo   x            xxvxxxxxxx                                 ",
   "                          x                           x                                                       ",
   "xxxxxxx!!!|!!!xxxx        x                  xxxxxxxxxx                                               oooo    ",
   "      xxxxxxxxx           x                           x             oooooooo                                  ",
   "                          x                           x          x        k                             k     ",
   "                          x       x                   x          xxxxxxxxxxxxxxxxx!!!!!!|||!!!!!xxxxxxxxxxxxxx",
   "                          x       xx!!|!!!xxxxx!!!!!!!x                          xxxxxxxxxxxxxxxx             ",
   "                          x         xxxxxxx   xxxxvxxxx                                                       ",
   "                x    k    x   oooooooooo              x                                                       ",
   "                xxxxxxxxxxxxxxxxxxxxxxxxx       oooo  x                                                       ",
   "                                                      x         ooooooooooo                                   ",
   "                                             x    k   x     xxxxxxxxxxxxxxxxx                                 ",
   "          oooooo         ooooooooooooo       xxxxxxxxxx                                                       ",
   "                                                                                                oo            ",
   "    x          k               k          x                                                                   ",
   "    xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx                                         x            k            x",
   "                                                                                    xxxxxxxxxxxxxxxxxxxxxxxxxx",
   "                                                                                                              ",
   "                                                                                                              ",
   "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"],
  ["                                                                                                              ",
   "                                                                                                              ",
   "                                  oooooooooooooooooooooooooo                                                  ",
   "                                                                                                              ",
   "               oooooo                                                                                         ",
   " o                           xxxxx    xxxxxxxxxxxx    xxxxxxxxx                                               ",
   "                                  ssss            ssss        x                                               ",
   "xxx!!!!!!!!!xxxx   xxxxxx                                     x                                               ",
   "xxxxxxxxxxxx    sss                                           x                                               ",
   "                                 ooooooo                      xxxxxx!!!|!!|!!xxxxxxxx                         ",
   "                     x        k           x                   x    xxxxxxxxxxx                                ",
   "    ooooooo          xxxxxxxxxxxxxxxxxxxxxx                   x                                               ",
   "x       k      x                                              x                                               ",
   "xxxxxxxxxxxxxxxx                                              x                          x          k        x",
   "                                                              x                          xxxxxxxxxxxxxxxxxxxxx",
   "                 xxxxxxxx!!!!!!!!!!!!!!x                      x                                               ",
   "                        xxxvxxxxxvxxxxxx                      x                                               ",
   "                                                              x                                               ",
   "       xxxxxxx  xxx     oooooooooo                            x       xxxxxxxx     xxxxxx                     ",
   "              ss                                              x               sssss                           ",
   "                   x        k        x                        x                                               ",
   "                   xxxxxxxxxxxxxxxxxxx                        x                                               ",
   "                                                              x!!!!!!!!!!!!!!!!!!!xxxxxxxxxxxx    xxxx        ",
   "               oooo                         oooooooo          xxxxxxxxxxxxxxxxxxxxx           ssss            ",
   "                                                              x                                               ",
   "          xxxxxxxxxxxxxxx             xxxxxxxxxxxxxxxxxx      x                                               ",
   "                                                              x                                     ooooo     ",
   "     oooooo                                                   x                               xxxxxxxxxxxxxxxx",
   "xxxxxxxxxxx   xx                                              x                                               ",
   "           sss           oooooooo                             x                                               ",
   "                     x      k      x                          x                        x   k    x             ",
   "                     xxxxxxxxxxxxxxx                              ooooooooo           xxxxxxxxxxx       ooo   ",
   "  @                                                                                                           ",
   "xxxxxxxxxxxxxxxx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!||!!!xxxxxxxxxxxxxxxxxxxxx!!!!!||||||!!!!!xxxxxxxxxx"]
  ["                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "           xx!!!!!xx      xxx     xx!!!!xx       xx!!!!!!!!!!!!xx     xxx     xxxxx!!!!!!xx    xxx            ",
   "            xx!!!xx      xx!xx    xx!!!!xx       xx!!!!!!!!!!!!xx     xxx     xx xxx!!!!!xx    xxx            ",
   "             xx!xx      xx!!!xx   xx!!!!xx       xx!!!!!!!!!!!!xx     xxx     xx  xxx!!!!xx    xxx            ",
   "              xxx       xx!!!xx   xx!!!!xx        xx!!!!xx!!!!xx      xxx     xx    xx!!!xx    xxx            ",
   "              xxx        xx!xx     xx!!xx          xx!!xxxx!!xx       xxx     xx     xx!xxx                   ",
   "              xxx         xxx       xxxx            xxxx  xxxx        xxx     xx      xxxxx    xxx            ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                        @                                                     ",
   "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"],
   ];

if (typeof module != "undefined" && module.exports)
  module.exports = GAME_LEVELS;
