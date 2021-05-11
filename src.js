    const search = new URLSearchParams(window.location.search);

    const index = {};
    const index_builder_asset = (y, x) => {
        y[x.value.id] = x.value;
        return y;
    };
    const index_builder_balance = (y, x) => {
        if (x.type === 'recv') {
            y[x.value.token] = y[x.value.token].add(x.value.value);
            return y;
        }
        if (x.type === 'earn') {
            y[x.value.token] = y[x.value.token].add(x.value.change);
            return y;
        }
    };

    const index_builder_principle = (y, x) => {
        y[x.value.token] = y[x.value.token].add(x.value.value);
        return y;
    };

    const index_builder_interest = (y, x) => {
        y[x.value.token] = y[x.value.token].add(x.value.change);
        return y;
    };

    const index_builder_farm = (y, x) => {
        y[x.value.token] = x.value.farm;
        return y
    };

    const index_builder_update = (y, x) => {
        y[x.value.token] = x.value.date;
        return y
    };

    index.asset = data.filter(item => item.type === 'asset').reduce(index_builder_asset, {});
    index.balance = data.filter(item => ['recv', 'earn'].includes(item.type)).reduce(index_builder_balance, data.filter(item => item.type === 'asset').reduce((y, x) => { y[x.value.id] = ethers.BigNumber.from('0'); return y; }, {}));
    index.principle = data.filter(item => item.type === 'recv').reduce(index_builder_principle, data.filter(item => item.type === 'asset').reduce((y, x) => { y[x.value.id] = ethers.BigNumber.from('0'); return y; }, {}));
    index.interest = data.filter(item => item.type === 'earn').reduce(index_builder_interest, data.filter(item => item.type === 'asset').reduce((y, x) => { y[x.value.id] = ethers.BigNumber.from('0'); return y; }, {}));
    index.farm = data.filter(item => item.type === 'earn').reduce(index_builder_farm, data.filter(item => item.type === 'asset').reduce((y, x) => { y[x.value.id] = []; return y; }, {}));
    index.update = data.filter(item => item.type === 'earn').reduce(index_builder_update, data.filter(item => item.type === 'asset').reduce((y, x) => { y[x.value.id] = ''; return y; }, {}));

    console.log(index.update)

    {
        const header = document.createElement('header')
        document.getElementById('main_content').appendChild(header);
        {
            const a = document.createElement('a')
            header.appendChild(a)
            a.innerText = 'Balance Overview'
            a.href = '?'
        }
        {
            const span = document.createElement('span')
            header.appendChild(span)
            span.innerText = ' '
            span.href = '?'
        }

        {
            const a = document.createElement('a')
            header.appendChild(a)
            a.innerText = 'Operation Overview'
            a.href = '?cmd=list-operation'
        }

    }
    console.log(search.get('cmd'))
    switch (search.get('cmd')) {
        case 'list-operation':
            (function () {
                {
                    const h1 = document.createElement('h1')
                    document.getElementById('main_content').appendChild(h1);
                    h1.innerText = 'Operation Overview'
                }
                const table = document.createElement('table');
                document.getElementById('main_content').appendChild(table);
                const tr = document.createElement('tr');
                table.appendChild(tr);
                (['date', 'token', 'symbol', 'farm', 'earned', 'description', 'transactions']).forEach(item => {
                    const th = document.createElement('th');
                    tr.appendChild(th);
                    th.innerText = item;
                });
                for (let k in data) {
                    const item = data[data.length - 1 - k];
                    if (item.type != 'earn') {
                        continue
                    }
                    const tr = document.createElement('tr');
                    table.appendChild(tr);
                    {
                        const td = document.createElement('td');
                        tr.appendChild(td);
                        const code = document.createElement('code');
                        td.appendChild(code);
                        code.innerText = item.value.date;
                    }
                    {
                        const td = document.createElement('td');
                        tr.appendChild(td);
                        const img = document.createElement('img');
                        td.appendChild(img);
                        img.src = index.asset[item.value.token].icon;
                    }
                    {
                        const td = document.createElement('td');
                        tr.appendChild(td);
                        const code = document.createElement('code');
                        td.appendChild(code);
                        code.innerText = index.asset[item.value.token].symbol;
                    }
                    {
                        const td = document.createElement('td');
                        tr.appendChild(td);
                        const ul = document.createElement('ul');
                        td.appendChild(ul);
                        for (let i in item.value.farm) {
                            const li = document.createElement('li');
                            ul.appendChild(li);
                            const a = document.createElement('a');
                            li.appendChild(a)
                            a.innerText = item.value.farm[i];
                            a.href = item.value.farm[i];
                        }
                    }
                    {
                        const td = document.createElement('td');
                        tr.appendChild(td);
                        const code = document.createElement('code');
                        td.appendChild(code);
                        code.innerText = ethers.utils.formatUnits(item.value.change, uint = index.asset[item.value.token].decimals);
                    }
                    {
                        const td = document.createElement('td');
                        tr.appendChild(td);
                        const p = document.createElement('p');
                        td.appendChild(p);
                        p.innerText = item.value.description;
                    }
                    {
                        const td = document.createElement('td');
                        tr.appendChild(td);
                        const ul = document.createElement('ul');
                        td.appendChild(ul);
                        for (let i in item.value.hash) {
                            const li = document.createElement('li');
                            ul.appendChild(li);
                            const a = document.createElement('a');
                            li.appendChild(a)
                            a.innerText = item.value.hash[i];
                            a.href = `https://bscscan.com/tx/${item.value.hash[i]}`;
                        }
                    }
                }
            })()
            break;
        default:
            (function () {
                {
                    const h1 = document.createElement('h1')
                    document.getElementById('main_content').appendChild(h1);
                    h1.innerText = 'Balance Overview'
                }
                const table = document.createElement('table');
                document.getElementById('main_content').appendChild(table);
                const tr = document.createElement('tr');
                table.appendChild(tr);
                (['icon', 'symbol', 'contract', 'balance', 'principle', 'interest', 'APY', 'farm']).forEach(item => {
                    const th = document.createElement('th');
                    tr.appendChild(th);
                    th.innerText = item;
                });
                for (let k in index.asset) {
                    const tr = document.createElement('tr');
                    table.appendChild(tr);
                    {
                        const td = document.createElement('td');
                        tr.appendChild(td);
                        const img = document.createElement('img');
                        td.appendChild(img);
                        img.src = index.asset[k].icon;
                    }
                    {
                        const td = document.createElement('td');
                        tr.appendChild(td);
                        const b = document.createElement('b');
                        td.appendChild(b);
                        b.innerText = index.asset[k].symbol;
                    }
                    {
                        const td = document.createElement('td');
                        tr.appendChild(td);
                        const a = document.createElement('a');
                        td.appendChild(a);
                        a.innerText = index.asset[k].id;
                        a.href = `https://bscscan.com/token/${index.asset[k].id}`
                    }
                    {
                        const td = document.createElement('td');
                        tr.appendChild(td);
                        const code = document.createElement('code');
                        td.appendChild(code);
                        code.innerText = ethers.utils.formatUnits(index.balance[k], uint = index.asset[k].decimals);
                    }
                    {
                        const td = document.createElement('td');
                        tr.appendChild(td);
                        const code = document.createElement('code');
                        td.appendChild(code);
                        code.innerText = ethers.utils.formatUnits(index.principle[k], uint = index.asset[k].decimals);
                    }
                    {
                        const td = document.createElement('td');
                        tr.appendChild(td);
                        const code = document.createElement('code');
                        td.appendChild(code);
                        code.innerText = ethers.utils.formatUnits(index.interest[k], uint = index.asset[k].decimals);
                    }
                    {
                        const td = document.createElement('td');
                        tr.appendChild(td);
                        const code = document.createElement('code');
                        td.appendChild(code);
                        console.log(index.interest[k].mul('1000000000000000000').div(index.principle[k]));
                    }
                    {
                        const td = document.createElement('td');
                        tr.appendChild(td);
                        const a = document.createElement('a');
                        td.appendChild(a);
                        a.href = index.farm[k];
                        a.innerText = index.farm[k];
                    }
                }
            })()
            break;
    }
