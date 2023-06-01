import React from 'react'
import Chart from "react-apexcharts";

function GraficEmployed() {
  let options = {
    series: [{
      data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
    }],
    chart: {
      type: 'bar',
      height: 350
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: true,
      }
    },
    dataLabels: {
      enabled: false
    },
    xaxis: {
      categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan',
        'United States', 'China', 'Germany'
      ],
    }
  }
  return (
  <>
  <div className="flex w-[1620px]  justify-between items-center">
  <div class="bg-white shadow rounded-lg mb-4 p-4 sm:p-6 h-full w-[600px]">
                    <div class="flex items-center justify-between mb-4">
                      <h3 class="text-xl font-bold leading-none text-gray-900">
                        Últimas clientes
                      </h3>
                      <a
                        href="#"
                        class="text-sm font-medium text-cyan-600 hover:bg-gray-100 rounded-lg inline-flex items-center p-2"
                      >
                        Ver Todo
                      </a>
                    </div>
                    <div class="flow-root">
                      <ul role="list" class="divide-y divide-gray-200">
                        <li class="py-3 sm:py-4">
                          <div class="flex items-center space-x-4">
                            <div class="flex-shrink-0">
                              <img
                                class="h-8 w-8 rounded-full"
                                src="https://demo.themesberg.com/windster/images/users/neil-sims.png"
                                alt="Neil image"
                              />
                            </div>
                            <div class="flex-1 min-w-0">
                              <p class="text-sm font-medium text-gray-900 truncate">
                                Neil Sims
                              </p>
                              <p class="text-sm text-gray-500 truncate">
                                <a
                                  href="/cdn-cgi/l/email-protection"
                                  class="__cf_email__"
                                  data-cfemail="17727a767e7b57607e7973646372653974787a"
                                >
                                  [email&#160;protected]
                                </a>
                              </p>
                            </div>
                            <div class="inline-flex items-center text-base font-semibold text-gray-900">
                              $320
                            </div>
                          </div>
                        </li>
                        <li class="py-3 sm:py-4">
                          <div class="flex items-center space-x-4">
                            <div class="flex-shrink-0">
                              <img
                                class="h-8 w-8 rounded-full"
                                src="https://demo.themesberg.com/windster/images/users/bonnie-green.png"
                                alt="Neil image"
                              />
                            </div>
                            <div class="flex-1 min-w-0">
                              <p class="text-sm font-medium text-gray-900 truncate">
                                Bonnie Green
                              </p>
                              <p class="text-sm text-gray-500 truncate">
                                <a
                                  href="/cdn-cgi/l/email-protection"
                                  class="__cf_email__"
                                  data-cfemail="d4b1b9b5bdb894a3bdbab0a7a0b1a6fab7bbb9"
                                >
                                  [email&#160;protected]
                                </a>
                              </p>
                            </div>
                            <div class="inline-flex items-center text-base font-semibold text-gray-900">
                              $3467
                            </div>
                          </div>
                        </li>
                        <li class="py-3 sm:py-4">
                          <div class="flex items-center space-x-4">
                            <div class="flex-shrink-0">
                              <img
                                class="h-8 w-8 rounded-full"
                                src="https://demo.themesberg.com/windster/images/users/michael-gough.png"
                                alt="Neil image"
                              />
                            </div>
                            <div class="flex-1 min-w-0">
                              <p class="text-sm font-medium text-gray-900 truncate">
                                Michael Gough
                              </p>
                              <p class="text-sm text-gray-500 truncate">
                                <a
                                  href="/cdn-cgi/l/email-protection"
                                  class="__cf_email__"
                                  data-cfemail="57323a363e3b17203e3933242332257934383a"
                                >
                                  [email&#160;protected]
                                </a>
                              </p>
                            </div>
                            <div class="inline-flex items-center text-base font-semibold text-gray-900">
                              $67
                            </div>
                          </div>
                        </li>
                        <li class="py-3 sm:py-4">
                          <div class="flex items-center space-x-4">
                            <div class="flex-shrink-0">
                              <img
                                class="h-8 w-8 rounded-full"
                                src="https://demo.themesberg.com/windster/images/users/thomas-lean.png"
                                alt="Neil image"
                              />
                            </div>
                            <div class="flex-1 min-w-0">
                              <p class="text-sm font-medium text-gray-900 truncate">
                                Thomes Lean
                              </p>
                              <p class="text-sm text-gray-500 truncate">
                                <a
                                  href="/cdn-cgi/l/email-protection"
                                  class="__cf_email__"
                                  data-cfemail="284d45494144685f41464c5b5c4d5a064b4745"
                                >
                                  [email&#160;protected]
                                </a>
                              </p>
                            </div>
                            <div class="inline-flex items-center text-base font-semibold text-gray-900">
                              $2367
                            </div>
                          </div>
                        </li>
                        <li class="pt-3 sm:pt-4 pb-0">
                          <div class="flex items-center space-x-4">
                            <div class="flex-shrink-0">
                              <img
                                class="h-8 w-8 rounded-full"
                                src="https://demo.themesberg.com/windster/images/users/lana-byrd.png"
                                alt="Neil image"
                              />
                            </div>
                            <div class="flex-1 min-w-0">
                              <p class="text-sm font-medium text-gray-900 truncate">
                                Lana Byrd
                              </p>
                              <p class="text-sm text-gray-500 truncate">
                                <a
                                  href="/cdn-cgi/l/email-protection"
                                  class="__cf_email__"
                                  data-cfemail="a2c7cfc3cbcee2d5cbccc6d1d6c7d08cc1cdcf"
                                >
                                  [email&#160;protected]
                                </a>
                              </p>
                            </div>
                            <div class="inline-flex items-center text-base font-semibold text-gray-900">
                              $367
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div id="chart">
  <Chart options={options} series={options.series} type="bar" width={900} height={400} />
</div>
</div>
                  </>
  )
}

export default GraficEmployed