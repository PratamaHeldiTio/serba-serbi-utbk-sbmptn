$('.soshum').on('click', function () {
    $('.saintek-data').css('display', 'none');
    $('.soshum-data').css('display', 'block');
})

$('.saintek').on('click', function () {
    $('.soshum-data').css('display', 'none');
    $('.saintek-data').css('display', 'block');
})

$('.ipb').on('click', function () {
    $('.soshum-data').css('display', 'none');
    $('.saintek-data').css('display', 'block');
})

// pie chart untuk peserta
var ctx = document.getElementById("peserta").getContext("2d");
var piechart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Saintek', 'Soshum'],
        datasets: [{
            data: [678.942, 616.678],
            borderWidth: 3,
            hoverBorderWidth: 6,
            backgroundColor: [
                'rgba(51, 51, 255, 1)',
                'rgba(255, 51, 51, 1)'
            ]
        }],
    },
    options: {
        title: {
            display: true,
            text: 'Perbandingan Jumlah Peserta Saintek dan Soshum Tahun 2019',
            fontSize: 18,
            fontFamily: 'Arial'
        },
        legend: {
            display: true,
            labels: {
                align: 'start'
            }
        }
    }
});


// ITB Saintek
var ctx = document.getElementById('itbSaintek').getContext('2d');
var chart = new Chart(ctx, {
    type: 'bar',

    data: {
        labels: ['STEI', 'FMIPA', 'FTI-Kampus Ganesa', 'FTTM', 'FTSL-Kampus Ganesa'],
        datasets: [{
            backgroundColor: '#1E90FF',
            hoverBackgroundColor: 'rgba(0, 102, 102, 1)',
            maxBarThickness: 1,
            data: [238, 180, 144, 136, 136]
        }]
    },

    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        title: {
            display: true,
            text: '5 Daya Tampung Rumpun Saintek Terbanyak ITB Tahun 2019',
            fontSize: 18
        },
        legend: {
            display: false
        }
    }
});

// ITB soshum
var ctx = document.getElementById('itbSoshum').getContext('2d');
var chart = new Chart(ctx, {
    type: 'bar',

    data: {
        labels: ['FSRD', 'SBM', 'FSRD-Kampus Cirebon'],
        datasets: [{
            backgroundColor: '#DC143C',
            hoverBackgroundColor: 'rgba(0, 102, 102, 1)',
            maxBarThickness: 1,
            data: [100, 96, 12]
        }]
    },

    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        title: {
            display: true,
            text: 'Daya Tampung Rumpun Soshum Terbanyak ITB Tahun 2019',
            fontSize: 18
        },
        legend: {
            display: false
        }
    }
});

// UGM Saintek
var ctx = document.getElementById('ugmSaintek').getContext('2d');
var chart = new Chart(ctx, {
    type: 'bar',

    data: {
        labels: ['ILMU DAN INDUSTRI PETERNAKAN', 'KEHUTANAN', 'FARMASI', 'BIOLOGI', 'KEDOKTERAN HEWAN'],
        datasets: [{
            backgroundColor: '#1E90FF',
            hoverBackgroundColor: '#BDB76B',
            maxBarThickness: 1,
            data: [135, 124, 108, 102, 90]
        }]
    },

    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        title: {
            display: true,
            text: '5 Daya Tampung Rumpun Saintek Terbanyak UGM Tahun 2019',
            fontSize: 18
        },
        legend: {
            display: false
        }
    }
});

// UGM Soshum
var ctx = document.getElementById('ugmSoshum').getContext('2d');
var chart = new Chart(ctx, {
    type: 'bar',

    data: {
        labels: ['HUKUM', 'PSIKOLOGI', 'AKUNTANSI', 'FILSAFAT', 'MANAJEMEN'],
        datasets: [{
            backgroundColor: '#DC143C',
            hoverBackgroundColor: '#BDB76B',
            maxBarThickness: 1,
            data: [149, 102, 68, 68, 59]
        }]
    },

    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        title: {
            display: true,
            text: '5 Daya Tampung Rumpun Soshum Terbanyak UGM Tahun 2019',
            fontSize: 18
        },
        legend: {
            display: false
        }
    }
});


// IPB Saintek
var ctx = document.getElementById('ipbSaintek').getContext('2d');
var chart = new Chart(ctx, {
    type: 'bar',

    data: {
        labels: ['KEDOKTERAN HEWAN', 'AGRONOMI DAN HORTIKULTURA', 'TEKNOLOGI PANGAN', 'TEKNOLOGI INDUSTRI PERTANIAN', 'AGRIBISNIS'],
        datasets: [{
            backgroundColor: '#1E90FF',
            hoverBackgroundColor: '#00008B',
            maxBarThickness: 1,
            data: [86, 78, 65, 63, 55]
        }]
    },

    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        title: {
            display: true,
            text: '5 Daya Tampung Rumpun Saintek Terbanyak IPB Tahun 2019',
            fontSize: 18
        },
        legend: {
            display: false
        }
    }
});


// ITS Saintek
var ctx = document.getElementById('itsSaintek').getContext('2d');
var chart = new Chart(ctx, {
    type: 'bar',

    data: {
        labels: ['INFORMATIKA', 'TEKNIK ELEKTRO', 'TEKNIK MESIN', 'TEKNIK KIMIA', 'TEKNIK INDUSTRI'],
        datasets: [{
            backgroundColor: '#1E90FF',
            hoverBackgroundColor: '#4682B4',
            maxBarThickness: 1,
            data: [100, 96, 88, 80, 80]
        }]
    },

    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        title: {
            display: true,
            text: '5 Daya Tampung Rumpun Saintek Terbanyak ITS Tahun 2019',
            fontSize: 18
        },
        legend: {
            display: false
        }
    }
});

// ITS Soshum
var ctx = document.getElementById('itsSoshum').getContext('2d');
var chart = new Chart(ctx, {
    type: 'bar',

    data: {
        labels: ['MANAJEMEN BISNIS', 'STUDI PEMBANGUNAN'],
        datasets: [{
            backgroundColor: '#DC143C',
            hoverBackgroundColor: '#4682B4',
            maxBarThickness: 1,
            data: [48, 20]
        }]
    },

    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        title: {
            display: true,
            text: 'Daya Tampung Rumpun Soshum Terbanyak ITS',
            fontSize: 18
        },
        legend: {
            display: false
        }
    }
});


// UI Saintek
var ctx = document.getElementById('uiSaintek').getContext('2d');
var chart = new Chart(ctx, {
    type: 'bar',

    data: {
        labels: ['PENDIDIKAN DOKTER', 'ILMU KOMPUTER', 'SISTEM INFORMASI', 'ILMU KESEHATAN MASYARAKAT', 'FARMASI'],
        datasets: [{
            backgroundColor: '#1E90FF',
            hoverBackgroundColor: '#FFFF00',
            maxBarThickness: 1,
            data: [72, 60, 60, 60, 52]
        }]
    },

    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        title: {
            display: true,
            text: '5 Daya Tampung Rumpun Saintek Terbanyak UI Tahun 2019',
            fontSize: 18
        },
        legend: {
            display: false
        }
    }
});


// UI Soshum
var ctx = document.getElementById('uiSoshum').getContext('2d');
var chart = new Chart(ctx, {
    type: 'bar',

    data: {
        labels: ['ILMU HUKUM', 'MANAJEMEN', 'ILMU PSIKOLOGI', 'AKUNTANSI', 'ILMU EKONOMI'],
        datasets: [{
            backgroundColor: '#DC143C',
            hoverBackgroundColor: '#FFFF00',
            maxBarThickness: 1,
            data: [167, 84, 80, 79, 40]
        }]
    },

    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        title: {
            display: true,
            text: '5 Daya Tampung Rumpun Soshum Terbanyak UI Tahun 2019',
            fontSize: 18
        },
        legend: {
            display: false
        }
    }
});


// UNDIP Saintek
var ctx = document.getElementById('undipSaintek').getContext('2d');
var chart = new Chart(ctx, {
    type: 'bar',

    data: {
        labels: ['KESEHATAN MASYARAKAT', 'PETERNAKAN', 'TEKNIK KIMIA', 'TEKNIK MESIN', 'ILMU KELAUTAN'],
        datasets: [{
            backgroundColor: '#1E90FF',
            hoverBackgroundColor: '#000080',
            maxBarThickness: 1,
            data: [150, 125, 113, 90, 90]
        }]
    },

    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        title: {
            display: true,
            text: '5 Daya Tampung Rumpun Saintek Terbanyak UNDIP Tahun 2019',
            fontSize: 18
        },
        legend: {
            display: false
        }
    }
});

// UNDIP Soshum
var ctx = document.getElementById('undipSoshum').getContext('2d');
var chart = new Chart(ctx, {
    type: 'bar',

    data: {
        labels: ['HUKUM', 'MANAJEMEN', 'AKUNTANSI', 'PSIKOLOGI', 'ADMINISTRASI PUBLIK'],
        datasets: [{
            backgroundColor: '#DC143C',
            hoverBackgroundColor: '#000080',
            maxBarThickness: 1,
            data: [425, 138, 138, 125, 88]
        }]
    },

    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        title: {
            display: true,
            text: '5 Daya Tampung Rumpun Soshum Terbanyak UNDIP Tahun 2019',
            fontSize: 18
        },
        legend: {
            display: false
        }
    }
});


// UNAIR Saintek
var ctx = document.getElementById('unairSaintek').getContext('2d');
var chart = new Chart(ctx, {
    type: 'bar',

    data: {
        labels: ['KESEHATAN MASYARAKAT', 'PENDIDIKAN DOKTER', 'PENDIDIKAN APOTEKER', 'KEDOKTERAN HEWAN', 'PENDIDIKAN DOKTER GIGI'],
        datasets: [{
            backgroundColor: '#1E90FF',
            hoverBackgroundColor: '#0000CD',
            maxBarThickness: 1,
            data: [112, 100, 100, 100, 72]
        }]
    },

    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        title: {
            display: true,
            text: '5 Daya Tampung Rumpun Saintek Terbanyak UNAIR Tahun 2019',
            fontSize: 18
        },
        legend: {
            display: false
        }
    }
});

// UNAIR Soshum
var ctx = document.getElementById('unairSoshum').getContext('2d');
var chart = new Chart(ctx, {
    type: 'bar',

    data: {
        labels: ['ILMU HUKUM', 'MANAJEMEN', 'AKUNTANSI', 'EKONOMI ISLAM', 'PSIKOLOGI'],
        datasets: [{
            backgroundColor: '#DC143C',
            hoverBackgroundColor: '#0000CD',
            maxBarThickness: 1,
            data: [104, 100, 100, 90, 88]
        }]
    },

    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        title: {
            display: true,
            text: '5 Daya Tampung Rumpun Soshum Terbanyak UNAIR Tahun 2019',
            fontSize: 18
        },
        legend: {
            display: false
        }
    }
});


// UNHAS Saintek
var ctx = document.getElementById('unhasSaintek').getContext('2d');
var chart = new Chart(ctx, {
    type: 'bar',

    data: {
        labels: ['AGROTEKNOLOGI', 'PETERNAKAN', 'KEHUTANAN', 'KESEHATAN MASYARAKAT', 'KESEHATAN MASYARAKAT'],
        datasets: [{
            backgroundColor: '#1E90FF',
            hoverBackgroundColor: '#FF0000',
            maxBarThickness: 1,
            data: [200, 160, 150, 125, 125]
        }]
    },

    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        title: {
            display: true,
            text: '5 Daya Tampung Rumpun Saintek Terbanyak UNHAS Tahun 2019',
            fontSize: 18
        },
        legend: {
            display: false
        }
    }
});

// UNHAS Soshum
var ctx = document.getElementById('unhasSoshum').getContext('2d');
var chart = new Chart(ctx, {
    type: 'bar',

    data: {
        labels: ['ILMU HUKUM', 'MANAJEMEN', 'AKUNTANSI', 'ILMU EKONOMI', 'SASTRA INGGRIS'],
        datasets: [{
            backgroundColor: '#DC143C',
            hoverBackgroundColor: '#FF0000',
            maxBarThickness: 1,
            data: [200, 100, 100, 100, 75]
        }]
    },

    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        title: {
            display: true,
            text: '5 Daya Tampung Rumpun Soshum Terbanyak UNHAS Tahun 2019',
            fontSize: 18
        },
        legend: {
            display: false
        }
    }
});


// UB Saintek
var ctx = document.getElementById('ubSaintek').getContext('2d');
var chart = new Chart(ctx, {
    type: 'bar',

    data: {
        labels: ['AGROEKOTEKNOLOGI', 'PETERNAKAN', 'AGRIBISNIS', 'PENDIDIKAN DOKTER', 'TEKNOLOGI INDUSTRI PERTANIAN'],
        datasets: [{
            backgroundColor: '#1E90FF',
            hoverBackgroundColor: '#000080',
            maxBarThickness: 1,
            data: [312, 264, 168, 100, 100]
        }]
    },

    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        title: {
            display: true,
            text: '5 Daya Tampung Rumpun Saintek Terbanyak UB Tahun 2019',
            fontSize: 18
        },
        legend: {
            display: false
        }
    }
});

// UB Soshum
var ctx = document.getElementById('ubSoshum').getContext('2d');
var chart = new Chart(ctx, {
    type: 'bar',

    data: {
        labels: ['ILMU HUKUM', 'ILMU ADMINISTRASI BISNIS', 'ILMU ADMINISTRASI PUBLIK', 'MANAJEMEN', 'AKUNTANSI'],
        datasets: [{
            backgroundColor: '#DC143C',
            hoverBackgroundColor: '#000080',
            maxBarThickness: 1,
            data: [260, 156, 136, 112, 112]
        }]
    },

    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        title: {
            display: true,
            text: '5 Daya Tampung Rumpun Soshum Terbanyak UB Tahun 2019',
            fontSize: 18
        },
        legend: {
            display: false
        }
    }
});


// UNPAD Saintek
var ctx = document.getElementById('unpadSaintek').getContext('2d');
var chart = new Chart(ctx, {
    type: 'bar',

    data: {
        labels: ['ILMU PETERNAKAN', 'AGROTEKNOLOGI', 'PENDIDIKAN DOKTER', 'PSIKOLOGI', 'TEKNIK GEOLOGI'],
        datasets: [{
            backgroundColor: '#1E90FF',
            hoverBackgroundColor: '#000080',
            maxBarThickness: 1,
            data: [200, 150, 125, 80, 80]
        }]
    },

    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        title: {
            display: true,
            text: '5 Daya Tampung Rumpun Saintek Terbanyak UNPAD Tahun 2019',
            fontSize: 18
        },
        legend: {
            display: false
        }
    }
});

// UNPAD Soshum
var ctx = document.getElementById('unpadSoshum').getContext('2d');
var chart = new Chart(ctx, {
    type: 'bar',

    data: {
        labels: ['ILMU HUKUM', 'SASTRA ARAB', 'AKUNTANSI', 'ILMU PERPUSTAKAAN', 'ILMU KOMUNIKASI'],
        datasets: [{
            backgroundColor: '#DC143C',
            hoverBackgroundColor: '#000080',
            maxBarThickness: 1,
            data: [180, 70, 68, 60, 60]
        }]
    },

    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        title: {
            display: true,
            text: '5 Daya Tampung Rumpun Soshum Terbanyak UNPAD Tahun 2019',
            fontSize: 18
        },
        legend: {
            display: false
        }
    }
});